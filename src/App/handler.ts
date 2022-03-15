import { Parameter } from "../mathparserService/requestModels/parameter";
import { mathParserService } from "../mathparserService/mathparserService";

import {MAX_PARAMETERS_COUNT} from "./constants";
import App from "./index";
import { ComputedFunction } from "../mathparserService/responseModels/computedFunction";
import { ComputeExpressionResult } from "../mathparserService/responseModels/computeExpressionResult";
import { ChangeEvent } from "react";
import { ResponseContent } from "../mathparserService/responseModels/responseContent";

export class IndexHandler{
    constructor(indexComponent: App){
        this.indexComponent = indexComponent;
    }
	
	indexComponent: App;

    addParameter() {
		const parameters = this.indexComponent?.state?.parametersArray;
		
		if(parameters.length === MAX_PARAMETERS_COUNT) {
			alert("Не более 5 параметров!");
			return;
		}
		
		const key = parameters.length === 0
				? 1
				: parameters[parameters.length - 1].key + 1;
			
		const parameterProps = {
			deleteParameter: (key: number) => this.deleteParameter(key), 
			key: key,
			parameter: new Parameter(),
			onTextChanged: (e: ChangeEvent<HTMLInputElement>, key: number, property: string) => this.parameterTextChanged(e, key, property)
		};
		
		parameters.push(parameterProps);
		
		this.indexComponent.setState({parametersArray: parameters});
		
	}

	parameterTextChanged(e: ChangeEvent<HTMLInputElement>, key: number, property: string) {
		const stateParameter = this.indexComponent
									.state
									.parametersArray
									.filter(p => p.key === key)[0] as any;
		stateParameter.parameter[property] = e.currentTarget.value;

		this.indexComponent.setState({parametersArray: this.indexComponent
														.state
														.parametersArray});
	}
	
	deleteParameter(key: number) {
		const parameters = this
						.indexComponent
						.state
						.parametersArray
						.filter(p => p.key !== key);
		this.indexComponent.setState({parametersArray: parameters});
	}
	
	async componentDidMount() {
		const response = await mathParserService.getLast(20);
		const responseContent = response.content as Array<ComputedFunction>
		this.indexComponent.setState({ 
			lastComputedFunctions: responseContent
		});
	}
	  
	async computeButtonClicked() {
		
		const expressionText = this.indexComponent.state.expression;
		
		const parameters = this
							.indexComponent
							.state
							.parametersArray
							.map(p =>  
							new Parameter(
								p.parameter.variableName,
								p.parameter.value
		));
		
		this.indexComponent.setState({isComputing: true});
		
		let response: ResponseContent<ComputeExpressionResult>;
		try{
			response = await mathParserService.computeExpression(expressionText, parameters);
		}
		catch(err)
		{
			this.indexComponent.setState({isComputing: false});
			let result = "Ошибка!";
			if(err instanceof TypeError && 
				err.message === "Failed to fetch") {
				result+= " Проверьте ваше подключение к сети.";
			}
			
            this.indexComponent.setState({computeResult: result});
			return;
		}

		if(response.status === 200)
		{
			const responseContent = response?.content as ComputeExpressionResult			
			this.indexComponent.setState({
				isComputing: false,
				computeResult: responseContent?.result?.toString()
			});
		}
		else
		{
			const responseContent = response?.content as any
			if(response.contentType?.includes("json") 
				&& responseContent?.message !== undefined) 
			{
            	this.indexComponent.setState({
					computeResult: "Ошибка! Ответ от сервера: " + responseContent.message,
					isComputing: false
				});
			}
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