import {parameterNameFieldName, parameterValueFieldName} from "./constants";

function ParameterDiv(props) {
	const nameTextChanged = e => props.onTextChanged(e, props.id, parameterNameFieldName);
	const valueTextChanged = e => props.onTextChanged(e, props.id, parameterValueFieldName);
	const deleteParameter = () => props.deleteParameter(props.id);

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
					onChange={nameTextChanged}
				/>
				<br/>
				<input 
					defaultValue={props.value} 
					onChange={valueTextChanged}
				/>
			</div>
			<button 
				onClick={deleteParameter} 
				className='parameter-delete-button'
			>
				Удалить параметр
			</button>
		</div>);
	}

export default ParameterDiv;