function ComputedFunctionItem(props: any) {
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
					props.parametersAndValues.map((pv: any) => 
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