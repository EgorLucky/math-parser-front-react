import { ChangeEvent } from "react";
import { ParameterProp } from "./parameterProp";
import {parameterNameFieldName, parameterValueFieldName} from "./constants";

function ParameterDiv(props: ParameterProp) {

	const { id, parameter, onTextChanged, deleteParameter } = props;

	if(onTextChanged == undefined || deleteParameter == undefined){
		console.error("onTextChanged or deleteParameter is undefined!!!!!")
		return <>Error!!!!!</>
	}

	const nameTextChanged = (e: ChangeEvent<HTMLInputElement>) => onTextChanged(e, id, parameterNameFieldName);
	const valueTextChanged = (e: ChangeEvent<HTMLInputElement>) => onTextChanged(e, id, parameterValueFieldName);
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
					defaultValue={parameter.variableName} 
					onChange={nameTextChanged}
				/>
				<br/>
				<input 
					defaultValue={parameter.value} 
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