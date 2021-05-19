export const mathParserService = {
	setConfiguration(configuration, environment){
		this.serviceHost = (environment === "production")? 
							configuration.mathParserServiceUrlProd: 
							configuration.mathParserServiceUrlLocal;
	},

	getLast: async function(limit){
		const response = await fetch(this.serviceHost + '/api/math/getLast?limit=' + limit);

		return await getResponseContent(response);
	},
	computeExpression: async function(expression, parameters) {
		const payloadObject = {
			expression: expression,
			parameters: parameters
		};
		
		const response = await this.myFetch('/api/math/computeExpression', payloadObject);

		return response;
	},
	
	compute2DIntervalPlot: async function(payload) {
		const payloadObject = {
			expression: payload.expression,
			max: payload.xMax,
			min: payload.xMin,
			step: payload.xStep
		};
		
		const response = await this.myFetch('/api/math/compute2DIntervalPlot', payloadObject);

		return response;
	},

	myFetch: async function(url, body){
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

async function getResponseContent(response)
{
	let content = null;
			
	if(response.status === 200 || 
		response.headers.get("content-type").includes("application/json"))
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