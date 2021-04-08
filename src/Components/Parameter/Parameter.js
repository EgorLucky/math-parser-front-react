function ParameterDiv(props) {
		return (<div key={props.id.toString()} style={{display:'flex'}}>
				<div>
					<span>Имя параметра:</span>
					<br/>
					<span>Значение:</span>
				</div>
				<div>
					<input defaultValue={props.name} onChange={(e) => props.onTextChanged(e, props.id, "name")} type="text" className="parameterNameInput"/>
					<br/>
					<input defaultValue={props.value} onChange={(e) => props.onTextChanged(e, props.id, "value")} type="text" className="parameterValueInput"/>
				</div>
				<button onClick={() => props.deleteParameter(props.id.toString())} style={{height:'22px'}}>Удалить параметр</button>
			</div>);
	}

export default ParameterDiv;