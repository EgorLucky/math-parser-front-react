import { ComputedFunction } from "../../mathparserService/responseModels/computedFunction";

function ComputedFunctionItem(props: ComputedFunction) {
	 return (
		<table 
			className="computed-function-table"
			cellSpacing="0"
		>
			<tbody>
				<tr>
					<td colSpan={2}>
					{props.functionNotation}
					</td>
				</tr>
				<tr>
					<td>
					Параметры:
					</td>
					<td>
					Значение:
					</td>
				</tr>
				{
					props.parametersAndValues.map(pv => 
					{
						return (
							<tr key={pv.id}>
								<td> {pv.parameters} </td>
								<td> {pv.value} </td>
							</tr>)
					})
				}
			</tbody>
		</table>
	);
}
	
export default ComputedFunctionItem;