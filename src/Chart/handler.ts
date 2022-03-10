import Chart from 'chart.js';

import { Compute2DIntervalPlotRequestModel } from '../mathparserService/requestModels/compute2DIntervalPlotRequesModel';
import {mathParserService} from "../mathparserService/mathparserService";
import { Compute2DIntervalPlotResult } from '../mathparserService/responseModels/compute2DIntervalPlotResult';
import ChartPage from './index.jsx';

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
			const computeResponseContent = computeResponse?.content as any
			const message = computeResponseContent?.message;
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

		const successFullcomputeResponse = computeResponse.content as Compute2DIntervalPlotResult	
		const points = successFullcomputeResponse.result;

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
	
	getParams(): Compute2DIntervalPlotRequestModel {
		const {xMin, xMax, xStep, expression} = this.chartComponent.state;

		if (isNaN(xMin) ||
			isNaN(xMax) ||
			isNaN(xStep))
			return new Compute2DIntervalPlotRequestModel(expression, 5, 0, 1);

		return new Compute2DIntervalPlotRequestModel(expression, xMax, xMin, xStep);
	}
}