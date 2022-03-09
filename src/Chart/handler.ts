import Chart from 'chart.js';

import {appConfiguration} from "../configuration";
import {mathParserService} from "../mathparserService";
import ChartPage from './index.jsx';

const environment = /*(document.location.host.startsWith('127') || document.location.host.startsWith("localhost")) ? "development": */"production";
mathParserService.setConfiguration(appConfiguration, environment);
let destroyPreviousChart: any;

export class ChartHandler{
    constructor(chartComponent: ChartPage){
        this.chartComponent = chartComponent;
    }

	chartComponent: ChartPage;

    async draw(){
		const params = this.getParams();
		
		this.chartComponent.setState({isComputing: true});
		
		let computeResponse = null;
		let errorMesssage = "";
		try{
			computeResponse = await mathParserService.compute2DIntervalPlot(params);
		}
		catch(err)
		{
			errorMesssage = "Ошибка!";
			if(err instanceof TypeError && 
				err.message === "Failed to fetch") {
					errorMesssage+= " Проверьте ваше подключение к сети.";
			}
			
			this.chartComponent.setState({
				errorMessage: errorMesssage, 
				isComputing: false
			});
			
			return;
		}

		if(computeResponse.status !== 200)
		{
			const message = computeResponse?.content?.message;
			if(computeResponse.contentType?.includes("json") 
				&& message !== undefined)
				errorMesssage = "Ошибка! Ответ от сервера: " + message;
			else 
			{
				errorMesssage = "Ошибка!";
				console.log(computeResponse.content);
			}
			
			this.chartComponent.setState({
				errorMessage: errorMesssage, 
				isComputing: false
			});
			
			return;
		}
		
		this.chartComponent.setState({errorMessage: ""});

		const points = computeResponse.content.result;

		if(destroyPreviousChart != null)
			destroyPreviousChart();

		const lables = points.map((p: any) => p.x);

		const data = {
			//args
			labels: lables,
			datasets: [
			{
					label: "mathFunction",
					function: (x: any) => points.filter((p: any) => p.x === x)
										.map((p: any) => p.y),
				borderColor: "rgba(255, 206, 86, 1)",
				data: [],
				fill: false
			}]
		};

		Chart.pluginService.register({
			beforeInit: function (chart: any) {
				const data = chart.config.data;
				for (let i = 0; i < data?.datasets?.length; i++) {
					for (let j = 0; j < data.labels.length; j++) {
						const func = data.datasets[i].function,
							x = data.labels[j],
							functionValues = func(x);
						functionValues.map((y: any) => data.datasets[i].data.push(y));
					}
				}
			}
		});
		
		const ctx = document.getElementById("myChart");
		if(ctx == null){
			console.log(`document.getElementById("myChart") is null!!!!!`);
			return;
		}
		const myBarChart = new Chart(ctx as HTMLCanvasElement, {
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
	
	getParams() {
		const {xMin, xMax, xStep, expression} = this.chartComponent.state;

		if (isNaN(xMin) ||
			isNaN(xMax) ||
			isNaN(xStep))
			return {
				xMin: 0,
				xMax: 5,
				xStep: 1,
				expression: expression
			};

		return {xMin, xMax, xStep, expression};
	}
}