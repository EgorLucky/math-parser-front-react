const name = "name";
const value = "value";

function ParameterDiv(props) {
	return (
		<div key={props.id} className='parameter-parent-div'>
			<div>
				<span>Имя параметра:</span>
				<br/>
				<span>Значение:</span>
			</div>
			<div>
				<input 
					defaultValue={props.name} 
					onChange={(e) => props.onTextChanged(e, props.id, name)}
				/>
				<br/>
				<input 
					defaultValue={props.value} 
					onChange={(e) => props.onTextChanged(e, props.id, value)}
				/>
			</div>
			<button 
				onClick={() => props.deleteParameter(props.id)} 
				className='parameter-delete-button'
			>
				Удалить параметр
			</button>
		</div>);
	}

export default ParameterDiv;