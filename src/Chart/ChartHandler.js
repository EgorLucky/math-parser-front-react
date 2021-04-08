import Chart from 'chart.js';

import {appConfiguration} from "../configuration.js";
import {mathParserService} from "../mathparserService.js";

const environment = /*(document.location.host.startsWith('127') || document.location.host.startsWith("localhost")) ? "development": */"production";
mathParserService.setConfiguration(appConfiguration, environment);
let destroyPreviousChart = null;

export class ChartHandler{
    constructor(chartComponent){
        this.chartComponent = chartComponent;
    }

    async draw(){
		const labels = this.getLabels();
		
		this.chartComponent.setState({isComputing: true});
		
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
			
			this.chartComponent.setState({
				errorMessage: errorMesssage, 
				isComputing: false
			});
			
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
			
			this.chartComponent.setState({
				errorMessage: errorMesssage, 
				isComputing: false
			});
			
			return;
		}
		
		this.chartComponent.setState({errorMessage: ""});

		const points = getPointsResponse.content.result.map(c => ({
			x: c.parameters[0].value,
			y: c.value
		}));

		if(destroyPreviousChart != null)
			destroyPreviousChart();

		const data = {
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
				const data = chart.config.data;
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
		
		const ctx = document.getElementById("myChart");
		const myBarChart = new Chart(ctx, {
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
		
		this.chartComponent.setState(
		{
			isComputing: false, 
			errorMessage: errorMesssage
		});
	}
	
	getLabels() {
		let xMin = this.chartComponent.state.xMin;
		let xMax = this.chartComponent.state.xMax;
		let xStep = this.chartComponent.state.xStep;

		if (!(Number(xMin) != NaN &&
			Number(xMax) != NaN &&
			Number(xStep) != NaN))
			return [0, 1, 2, 3, 4, 5];

		let result = [];
		for (xMin; xMin < xMax; xMin += xStep)
			result.push(xMin);
		result.push(xMax);

		return result;
	}
	
	async getPoints(labels) {
		let expression = this.chartComponent.state.expression;
		let parametersTable = labels.map(a => [
		{
			variableName: "x",
			value: a
		}]);
		let response = await mathParserService.computeFunctionValues(expression, parametersTable);

		return response;
	}
}