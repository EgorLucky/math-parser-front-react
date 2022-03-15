import Chart, { ChartData, ChartDataSets } from 'chart.js';

import { Compute2DIntervalPlotRequestModel } from '../mathparserService/requestModels/compute2DIntervalPlotRequesModel';
import { mathParserService } from "../mathparserService/mathparserService";
import { Compute2DIntervalPlotResult } from '../mathparserService/responseModels/compute2DIntervalPlotResult';
import ChartPage from './index.jsx';
import { ResponseContent } from '../mathparserService/responseModels/responseContent';

let destroyPreviousChart: () => void;

export class ChartHandler{
    constructor(chartComponent: ChartPage){
        this.chartComponent = chartComponent;
    }

	chartComponent: ChartPage;

    async draw(){
		const params = this.getParams();
		
		this.chartComponent.setState({isComputing: true});
		
		let computeResponse: ResponseContent<Compute2DIntervalPlotResult>;
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

		const lables = points.map(p => p.x);

		const data = {
			//args
			labels: lables,
			datasets: [
			{
				label: params.expression,
				borderColor: "rgba(255, 206, 86, 1)",
				data: [],
				fill: false
			}]
		};

		const func = (x: number) => points.filter(p => p.x === x)
										.map(p => p.y);

		Chart.pluginService.clear();
		Chart.pluginService.register({
			beforeInit: function (chart: Chart) {
				const data = chart.config.data as ChartData;
				const chartDatasets = data.datasets as ChartDataSets[]
				const chartDataLabels = data.labels as number[]
				for (let i = 0; i < chartDatasets.length; i++) {
					for (let j = 0; j < chartDataLabels.length; j++) {
						const x = chartDataLabels[j],
							functionValues = func(x);
						functionValues.map((y: number) => chartDatasets[i].data?.push(y));
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