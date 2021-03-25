function ParameterDiv(props) {
		let result;
		result = (<div ref={props.ref.block} key={props.key.toString()} style={{display:'flex'}}>
				<div>
					<span>Имя параметра:</span>
					<br/>
					<span>Значение:</span>
				</div>
				<div>
					<input ref={props.ref.name} type="text" className="parameterNameInput"/>
					<br/>
					<input ref={props.ref.value} type="text" className="parameterValueInput"/>
				</div>
				<button onClick={() => props.deleteParameter(props.key.toString())} style={{height:'22px'}}>Удалить параметр</button>
			</div>);
		
		return result;
	}

export default ParameterDiv;