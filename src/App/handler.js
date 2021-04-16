import {appConfiguration} from "../configuration.js";
import {mathParserService} from "../mathparserService.js";

const environment = /*(document.location.host.startsWith('127') || document.location.host.startsWith("localhost")) ? "development": */"production";
mathParserService.setConfiguration(appConfiguration, environment);

export class IndexHandler{
    constructor(indexComponent){
        this.indexComponent = indexComponent;
    }

    addParameter() {
		const parameters = this.indexComponent.state.parametersArray;
		
		if(parameters.length == 5) {
			alert("Не более 5 параметров!");
			return;
		}
		
		const key = parameters.length == 0? 1
				: parameters[parameters.length - 1].key + 1;
			
		const parameterProps = {
			deleteParameter: (key) => this.deleteParameter(key), 
			key: key,
			name: "",
			value: "",
			onTextChanged: (e, key, property) => this.parameterTextChanged(e, key, property)
		};
		
		parameters.push(parameterProps);
		
		this.indexComponent.setState({parametersArray: parameters});
		
	}

	parameterTextChanged(e, key, property) {
		const stateParameter = this.indexComponent
									.state
									.parametersArray
									.filter(p => p.key == key)[0];
		stateParameter[property] = e.currentTarget.value;

		this.indexComponent.setState({parametersArray: this.indexComponent
														.state
														.parametersArray});
	}
	
	deleteParameter(key) {
		const parameters = this
						.indexComponent
						.state
						.parametersArray
						.filter(p => p.key != key);
		this.indexComponent.setState({parametersArray: parameters});
	}
	
	async componentDidMount() {
		const response = await mathParserService.getLast(20);

		let id = 0;
		const lastComputedFunctions = response.content.map(c => {
			c["id"] = id++;
			
			let paramAndValueId = 0;
			c.parametersAndValues.map(pv => pv["id"] = paramAndValueId++);
			return c;
		});

		this.indexComponent.setState({ 
			lastComputedFunctions: lastComputedFunctions
		});
	}
	  
	async computeButtonClicked() {
		
		const expressionText = this.indexComponent.state.expression;
		
		const parameters = this.indexComponent.state.parametersArray.map(p => ({
			variableName: p.name,
			value: p.value
		}));
		
		this.indexComponent.setState({isComputing: true});
		
		let response = null;
		try{
			response = await mathParserService.computeExpression(expressionText, parameters);
		}
		catch(err)
		{
			this.indexComponent.setState({isComputing: false});
			let result = "Ошибка!";
			if(err instanceof TypeError && 
				err.message == "Failed to fetch") {
				result+= " Проверьте ваше подключение к сети.";
			}
			
            this.indexComponent.setState({computeResult: result});
			return;
		}

		if(response.status == 200)
		{			
			this.indexComponent.setState({
				isComputing: false,
				computeResult: response?.content?.result
			});
		}
		else
		{
			if(response.contentType.includes("json"))
            	this.indexComponent.setState({
					computeResult: "Ошибка! Ответ от сервера: " + response?.content?.message,
					isComputing: false
				});
			else 
			{
				this.indexComponent.setState({
					computeResult: "Ошибка!",
					isComputing: false
				});
				console.log(response.content);
			}
		}

		this.componentDidMount();
	}
}