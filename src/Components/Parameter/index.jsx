import {parameterNameFieldName, parameterValueFieldName} from "./constants";

function ParameterDiv(props) {

	const { id, name, value, onTextChanged, deleteParameter } = props;

	const nameTextChanged = e => onTextChanged(e, id, parameterNameFieldName);
	const valueTextChanged = e => onTextChanged(e, id, parameterValueFieldName);
	const onDeleteParameter = () => deleteParameter(id);

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