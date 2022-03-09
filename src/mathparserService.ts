export const mathParserService = {
	serviceHost : "",
	setConfiguration(configuration: any, environment: string){
		this.serviceHost = (environment === "production")? 
							configuration.mathParserServiceUrlProd: 
							configuration.mathParserServiceUrlLocal;
	},

	getLast: async function(limit: number){
		const response = await fetch(this.serviceHost + '/api/math/getLast?limit=' + limit);

		return await getResponseContent(response);
	},
	computeExpression: async function(expression: string, parameters: any) {
		const payloadObject = {
			expression: expression,
			parameters: parameters
		};
		
		const response = await this.myFetch('/api/math/computeExpression', payloadObject);

		return response;
	},
	
	compute2DIntervalPlot: async function({expression, xMax, xMin, xStep} : any) {
		const payloadObject = {
			expression,
			max: xMax,
			min: xMin,
			step: xStep
		};
		
		const response = await this.myFetch('/api/math/compute2DIntervalPlot', payloadObject);

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