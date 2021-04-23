import {parameterNameFieldName, parameterValueFieldName} from "./constants";

function ParameterDiv(props) {

	const { id, name, value } = props;

	const nameTextChanged = e => props.onTextChanged(e, id, parameterNameFieldName);
	const valueTextChanged = e => props.onTextChanged(e, id, parameterValueFieldName);
	const deleteParameter = () => props.deleteParameter(id);

	return (
		<div key={id} className='parameter-parent-div'>
			<div>
				<span>Имя параметра:</span>
				<br/>
				<span>Значение:</span>
			</div>
			<div>
				<input 
					defaultValue={name} 
					onChange={nameTextChanged}
				/>
				<br/>
				<input 
					defaultValue={value} 
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