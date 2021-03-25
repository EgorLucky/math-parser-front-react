import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import AppDescription from './AppDescription.js';
import ParameterDiv from './Parameter.js';
import ComputedFunctionItem from './ComputedFunctionItem.js';
import Loader from './Loader.js';

import {appConfiguration} from "./configuration.js";
import {createMathparserService} from "./mathparserService.js";



let environment = /*(document.location.host.startsWith('127') || document.location.host.startsWith("localhost")) ? "development": */"production";
const mathParserService = createMathparserService(appConfiguration, environment);

class App extends Component {
	constructor (props){
		 super(props); 
		 this.state = {
				parametersArray:[],
				lastComputedFunctions:[],
				isComputing: false,
				isErrorComputed: false,
				computeResult: "",
				
			};
			
		this.expressionTextRef = React.createRef();
		this.computeButtonRef = React.createRef();
		this.resultTextRef = React.createRef();
	}

	render (){
		return (
		<div className="App">
				<AppDescription/>
				Введите выражение:
				<br/>
				<textarea ref={this.expressionTextRef} 
						  style={{width:'100%', height:'20%'}}>
				</textarea>
				<br/>
				<button ref={this.computeButtonRef}
						onClick={this.computeButtonClicked.bind(this)}>
					Посчитать
				</button>
				<button id="addParameterButton" 
						onClick={this.addParameter.bind(this)}>
					Добавить параметр
				</button>
				<br/>
				<div id="parameters">
					{
						this.state.parametersArray.map(i => i.parameter)
					}
				</div>
				<p ref={this.resultTextRef}>
					{
						this.state.isComputing? (<Loader/>): 
						 (this.state.computeResult)
					}
				</p>

				<a href="chart">Здесь можно построить график</a>

				<h3>Последние вычисленные функции:</h3>
				<div id="lastComputedFunctions">	
					{
						this.state.lastComputedFunctions.length == 0? 
						(<Loader/>) : ""
					}
					{
						this.state.lastComputedFunctions.map(f => ComputedFunctionItem(f))
					}
				</div>
		</div>
		);
	}
	
	addParameter() {
		const parameters = this.state.parametersArray;
		
		if(parameters.length == 5){
			alert("Не более 5 параметров!");
			return;
		}
		
		const key = parameters.length == 0? 1
				: parseInt(parameters[parameters.length - 1].key) + 1;
				
		const parameterRef = {
			block: React.createRef(),
			name: React.createRef(),
			value: React.createRef()
		};		
		
		const parameter = ParameterDiv(
		{
			ref: parameterRef,
			deleteParameter: this.deleteParameter.bind(this), 
			key: key
		});
		
		parameters.push(
		{ 
			parameter: parameter, 
			ref: parameterRef
		});
		
		this.setState({parametersArray:parameters});
		
	}
	
	deleteParameter(key) {
		let parameters = this.state.parametersArray;
		parameters = parameters.filter(p => p.parameter.key != key);
		this.setState({parametersArray:parameters});
	}
	
	componentDidMount() {
		mathParserService.getLast(20)
		  .then(res => this.setState({ lastComputedFunctions: res.content }));
	  }
	  
	async computeButtonClicked(){
		this.computeButtonRef.current.disabled = true;
		
		let expressionText = this.expressionTextRef.current.value;
		
		let parameters = this.state.parametersArray.map(p => ({
			variableName: p.ref.name.current.value,
			value: p.ref.value.current.value
		}));
		
		this.setState({isComputing: true});
		
		let response = null;
		try{
			response = await mathParserService.computeExpression(expressionText, parameters);
		}
		catch(err)
		{
			this.setState({isComputing: false});
			let result = "Ошибка!";
			if(err == "TypeError: Failed to fetch")
				result+= " Проверьте ваше подключение к сети.";
			
			this.setState({computeResult: result});
			this.computeButtonRef.current.disabled = false;
			return;
		}

		if(response.status == 200)
		{			
			this.setState({
				isComputing: false,
				computeResult: response.content.result,
				isErrorComputed: false
			});
			
			this.componentDidMount();
		}
		else
		{
			if(response.contentType.includes("json"))
				this.setState({computeResult: "Ошибка! Ответ от сервера: " + response.content.message});
			else 
			{
				this.setState({computeResult: "Ошибка!"});
				console.log(response.content);
			}
		}
		this.computeButtonRef.current.disabled = false;
	}
}

export default App;
