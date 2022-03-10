import { AppConfiguration } from "../configuration";
import { Compute2DIntervalPlotRequestModel } from "./requestModels/compute2DIntervalPlotRequesModel";
import { ComputeExpressionRequestModel } from "./requestModels/computeExpressionRequestModel";
import { Parameter } from "./requestModels/parameter";
import { ResponseContent } from "./responseModels/responseContent";
import { ComputedFunction } from "./responseModels/computedFunction";
import { ComputeExpressionResult } from "./responseModels/computeExpressionResult";
import { Compute2DIntervalPlotResult } from "./responseModels/compute2DIntervalPlotResult";

class MathParserService {
	serviceHost = AppConfiguration.environment === "production"? 
					AppConfiguration.mathParserServiceUrlProd: 
					AppConfiguration.mathParserServiceUrlLocal;

	async getLast(limit: number) {
		const response = await fetch(this.serviceHost + '/api/math/getLast?limit=' + limit);
		return await this.getResponseContent<Array<ComputedFunction>>(response);
	}

	async computeExpression(
		expression: string, 
		parameters: Array<Parameter>) {
		const payloadObject = new ComputeExpressionRequestModel(expression, parameters);
		const response = await this.myFetch<ComputeExpressionResult>('/api/math/computeExpression', payloadObject);
		return response;
	}
	
	async compute2DIntervalPlot(request : Compute2DIntervalPlotRequestModel) {
		const response = await this.myFetch<Compute2DIntervalPlotResult>('/api/math/compute2DIntervalPlot', request);
		return response;
	}

	async myFetch<T>(url: string, body: any): Promise<ResponseContent<T>> {
		const response = await fetch(this.serviceHost + url,
		{
			method: "post",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(body)
		});

		return await this.getResponseContent<T>(response);
	}

	async getResponseContent<T>(response: Response): Promise<ResponseContent<T>>
	{
		let content = null;
				
		if(response.status === 200 || 
			response.headers.get("content-type")?.includes("application/json"))
			content = await response.json() as T;
		else 
			content = await response.text();

		const result = new ResponseContent(
			response.status,
			content,
			response.headers.get("content-type") ?? "");

		return result;
	}
};

export const mathParserService = new MathParserService();