import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import Chart from 'chart.js';

import Loader from './Loader.js';

import {appConfiguration} from "./configuration.js";
import {createMathparserService} from "./mathparserService.js";

let environment = /*(document.location.host.startsWith('127') || document.location.host.startsWith("localhost")) ? "development": */"production";
const mathParserService = createMathparserService(appConfiguration, environment);
let destroyPreviousChart = null;

class ChartPage extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			isComputing: false,
			errorMessage: ""
		};
		
		this.drawButtonRef = React.createRef();
		this.xMinTextBoxRef = React.createRef();
		this.xMaxTextBoxRef = React.createRef();
		this.xStepTextBoxRef = React.createRef();
		this.expressionInputElementRef = React.createRef();
	}
	
	render(){
		return <>
					<h1>Построение графика</h1>
					<a href="/">На главную</a>
					<br/>
					Введите выражение f(x):
					<br/>
					<textarea 
						ref={this.expressionInputElementRef} 
						style={{width:"100%"}}>
					x^2
					</textarea>
					<br/>
					<div style={{display:"flex"}}>
						<div>
							Область определений
							<br/> 
							от: 
							<input
								id = "xMin"
								ref={this.xMinTextBoxRef}
								defaultValue="-15"/>
							<br/>
							до: 
							<input 
								id = "xMax"
								type="text" 
								ref={this.xMaxTextBoxRef}
								defaultValue="15"/>
							<br/>
						</div>
						<div>
							с шагом:
							<br/>
							<input
								id = "xStep"
								type="text" 
								ref={this.xStepTextBoxRef}
								defaultValue="1"/>
							<br/>
							<button 
								ref={this.drawButtonRef}
								onClick={this.draw.bind(this)}>
							Построить
							</button>
						</div>
					</div>
					<br/>
					{
						this.state.isComputing? <Loader/> : ""
					}
					{
						this.state.errorMessage
					}
					<canvas 
						id="myChart" 
						style={{width:"400px", height:"400px"}}>
					</canvas>
				</>;
	}
	
	async draw(){
		this.drawButtonRef.current.disabled = true;
		let labels = this.getLabels();
		
		this.setState({isComputing: true});
		
		let getPointsResponse = null;
		let errorMesssage = "";
		try{
			getPointsResponse = await this.getPoints(labels);
		}
		catch(err)
		{
			errorMesssage = "Ошибка!";
			if(err == "TypeError: Failed to fetch")
				errorMesssage += "Проверьте ваше подключение к сети.";
			this.drawButtonRef.current.disabled = false;
			
			this.setState({errorMessage: errorMesssage});
			
			return;
		}

		if(getPointsResponse.status != 200)
		{
			if(getPointsResponse.contentType.includes("json"))
				errorMesssage = "Ошибка! Ответ от сервера: " + getPointsResponse.content.message;
			else 
			{
				errorMesssage = "Ошибка!";
				console.log(getPointsResponse.content);
			}
			
			this.setState({errorMessage: errorMesssage});
			this.drawButtonRef.current.disabled = false;
			return;
		}
		
		this.setState({errorMessage: ""});

		let points = getPointsResponse.content.result.map(c => ({
			x: c.parameters[0].value,
			y: c.value
		}));

		if(destroyPreviousChart != null)
			destroyPreviousChart();

		let data = {
			//args
			labels: labels,
			datasets: [
			{
					label: "mathFunction",
					function: x => points.filter(p => p.x == x)
										.map(p => p.y),
				borderColor: "rgba(255, 206, 86, 1)",
				data: [],
				fill: false
			}]
		};

		Chart.pluginService.register({
			beforeInit: function (chart) {
				let data = chart.config.data;
				for (let i = 0; i < data.datasets.length; i++) {
					for (let j = 0; j < data.labels.length; j++) {
						let fct = data.datasets[i].function,
							x = data.labels[j],
							functionValues = fct(x);
						functionValues.map(y => data.datasets[i].data.push(y));
					}
				}
			}
		});
		
		let ctx = document.getElementById("myChart");
		let myBarChart = new Chart(ctx, {
			type: 'line',
			data: data,
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: false
						}
					}],
					xAxes: [{
						ticks: {
							beginAtZero: false
						}
					}]
				}
			}
		});
		destroyPreviousChart = () => myBarChart.destroy();
		
		this.setState(
		{
			isComputing: false, 
			errorMessage: errorMesssage
		});
		
		this.drawButtonRef.current.disabled = false;
	}
	
	getLabels() {
		let xMinTextBox = this.xMinTextBoxRef.current;
		let xMaxTextBox = this.xMaxTextBoxRef.current;
		let xStepTextBox = this.xStepTextBoxRef.current;

		if (!(Number(xMinTextBox.value) != NaN &&
			Number(xMaxTextBox.value) != NaN &&
			Number(xStepTextBox.value) != NaN))
			return [0, 1, 2, 3, 4, 5];

		let xMin = Number(xMinTextBox.value);
		let xMax = Number(xMaxTextBox.value);
		let xStep = Number(xStepTextBox.value);
		let result = [];
		for (xMin; xMin < xMax; xMin += xStep)
			result.push(xMin);
		result.push(xMax);

		return result;
	}
	
	async getPoints(labels) {
		let expression = this.expressionInputElementRef.current.value;
		let parametersTable = labels.map(a => [
		{
			variableName: "x",
			value: a
		}]);
		let response = await mathParserService.computeFunctionValues(expression, parametersTable);

		return response;
	}
}

export default ChartPage;