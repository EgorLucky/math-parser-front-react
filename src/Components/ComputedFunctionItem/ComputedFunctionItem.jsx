function ComputedFunctionItem(props) {
	 return (
		<table 
			className="computed-function-table"
			border="1"
			cellSpacing="0"
		>
			<tbody>
				<tr>
					<td colSpan="2">
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
							<tr>
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