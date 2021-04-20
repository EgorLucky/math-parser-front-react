import {parameterNameFieldName, parameterValueFieldName} from "./constants";

function ParameterDiv(props) {

	const { 
		id,
		onTextChanged,
		deleteParameter,
		name,
		value,
		nameTextChanged = e => onTextChanged(e, id, parameterNameFieldName), 
		valueTextChanged = e => onTextChanged(e, id, parameterValueFieldName), 
		onDeleteParameter = () => deleteParameter(id)
	} = props;

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
				onClick={onDeleteParameter} 
				className='parameter-delete-button'
			>
				Удалить параметр
			</button>
		</div>);
	}

export default ParameterDiv;