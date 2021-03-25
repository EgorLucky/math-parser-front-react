function ComputedFunctionItem(props) {
	 return (
		<table border="1"
				cellSpacing="0"
				style={{fontSize:"xx-large", width:"100%", marginBottom:"10px"}}>
			<tr>
				<td	colSpan="2">
				{"F(" + props.parameters.map(p => p.name).join(",") + ") = " + props.expressionString}
				</td>
			</tr>
			<tr>
				<td>
				{"Параметры:"}
				</td>
				
				<td>
				{"Значение:"}
				</td>
			</tr>
			{
				props.points.map(point => 
				{
					return (<tr>
							<td> {"F(" + createParamString(props.parameters, point) +")"} </td>
							<td> {point.result} </td>
						</tr>)
				})
			}
			
		</table>
	);
}

function createParamString(parameters, point){
	let paramStr = "";
	if(parameters.length != 0)
	{
		paramStr = parameters.map(p => p.values.filter(v => v.pointId == point.id).map(v => 
			{
				let result = v.value.toString();
				return result;
			})[0])
			.join(",");
	}
	
	return paramStr;
}
	
export default ComputedFunctionItem;