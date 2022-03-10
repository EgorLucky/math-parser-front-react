import { AppConfiguration } from "../configuration";
import { Compute2DIntervalPlotRequestModel } from "./compute2DIntervalPlotRequesModel";
import { ComputeExpressionRequestModel } from "./computeExpressionRequestModel";
import { Parameter } from "./parameter";

class MathParserService {
	serviceHost: string = AppConfiguration.environment === "production"? 
							AppConfiguration.mathParserServiceUrlProd: 
							AppConfiguration.mathParserServiceUrlLocal;

	async getLast(limit: number): Promise<any> {
		const response = await fetch(this.serviceHost + '/api/math/getLast?limit=' + limit);
		return await this.getResponseContent(response);
	}

	async computeExpression(
		expression: string, 
		parameters: Array<Parameter>): Promise<any> {
		const payloadObject = new ComputeExpressionRequestModel(expression, parameters);
		const response = await this.myFetch('/api/math/computeExpression', payloadObject);
		return response;
	}
	
	async compute2DIntervalPlot(request : Compute2DIntervalPlotRequestModel): Promise<any> {
		const response = await this.myFetch('/api/math/compute2DIntervalPlot', request);
		return response;
	}

	async myFetch(url: string, body: any): Promise<any> {
		const response = await fetch(this.serviceHost + url,
		{
			method: "post",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(body)
		});

		return await this.getResponseContent(response);
	}

	async getResponseContent(response: Response): Promise<any>
	{
		let content = null;
				
		if(response.status === 200 || 
			response.headers.get("content-type")?.includes("application/json"))
			content = await response.json();
		else 
			content = await response.text();

		const result = {
			status : response.status,
			content: content,
			contentType: response.headers.get("content-type")
		};

		return result;
	}
};

export const mathParserService = new MathParserService();