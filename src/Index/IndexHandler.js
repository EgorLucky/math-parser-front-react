import React from 'react';

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
		
		if(parameters.length == 5){
			alert("Не более 5 параметров!");
			return;
		}
		
		const key = parameters.length == 0? 1
				: parseInt(parameters[parameters.length - 1].key) + 1;
			
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
		let parameters = this.indexComponent.state.parametersArray;
		parameters = parameters.filter(p => p.key != key);
		this.indexComponent.setState({parametersArray: parameters});
	}
	
	componentDidMount() {
		mathParserService.getLast(20)
		  .then(res => this.indexComponent.setState({ lastComputedFunctions: res.content }));
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
			if(err == "TypeError: Failed to fetch")
				result+= " Проверьте ваше подключение к сети.";
			
            this.indexComponent.setState({computeResult: result});
			return;
		}

		if(response.status == 200)
		{			
			this.indexComponent.setState({
				isComputing: false,
				computeResult: response.content.result,
				isErrorComputed: false
			});
			
			this.indexComponent.componentDidMount();
		}
		else
		{
			if(response.contentType.includes("json"))
            this.indexComponent.setState({computeResult: "Ошибка! Ответ от сервера: " + response.content.message});
			else 
			{
				this.indexComponent.setState({computeResult: "Ошибка!"});
				console.log(response.content);
			}
		}
	}
}