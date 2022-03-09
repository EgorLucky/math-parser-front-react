import { AppConfiguration } from "../configuration";
import { Compute2DIntervalPlotRequestModel } from "./compute2DIntervalPlotRequesModel";
import { ComputeExpressionRequestModel } from "./computeExpressionRequestModel";
import { Parameter } from "./parameter";
export const mathParserService = {
	serviceHost: AppConfiguration.environment === "production"? 
							AppConfiguration.mathParserServiceUrlProd: 
							AppConfiguration.mathParserServiceUrlLocal,

	getLast: async function(limit: number){
		const response = await fetch(this.serviceHost + '/api/math/getLast?limit=' + limit);

		return await getResponseContent(response);
	},
	computeExpression: async function(expression: string, parameters: Array<Parameter>) {
		const payloadObject = new ComputeExpressionRequestModel(expression, parameters);
		
		const response = await this.myFetch('/api/math/computeExpression', payloadObject);

		return response;
	},
	
	compute2DIntervalPlot: async function(request : Compute2DIntervalPlotRequestModel) {
		const response = await this.myFetch('/api/math/compute2DIntervalPlot', request);

		return response;
	},

	myFetch: async function(url: string, body: any){
		const response = await fetch(this.serviceHost + url,
		{
			method: "post",
			headers: {
				"content-type": "application/json"
			},
			body: JSON.stringify(body)
		});

		return await getResponseContent(response);
	}
};

async function getResponseContent(response: Response)
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