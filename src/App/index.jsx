import React, { Component } from 'react';

import AppDescription from '../Components/AppDescription';
import ParameterDiv from '../Components/Parameter';
import ComputedFunctionItem from '../Components/ComputedFunctionItem';
import Loader from '../Components/Loader';

import {IndexHandler} from "./handler";


class App extends Component {
	constructor (props){
		 super(props); 
		 this.state = {
				parametersArray:[],
				lastComputedFunctions:[],
				isComputing: false,
				computeResult: "",
				expression: ""
			};

		this.handler = new IndexHandler(this);
	}

	onExpressionChange = e => this.setState({expression: e.currentTarget.value});

	computeButtonClicked = () => this.handler.computeButtonClicked();

	addParameter = () => this.handler.addParameter();

	componentDidMount = () => this.handler.componentDidMount();


	render () {
		return (
		<div className="App">
				<AppDescription/>
				Введите выражение:
				<br/>
				<textarea
					className='index-expression-textarea'
					onChange={this.onExpressionChange}
					defaultValue={this.state.expression}>
				</textarea>
				<br/>
				<button
					disabled={this.state.isComputing}
					onClick={this.computeButtonClicked}
				>
					Посчитать
				</button>
				<button id="addParameterButton" 
						onClick={this.addParameter}>
					Добавить параметр
				</button>
				<br/>
				<div id="parameters">
					{
						this.state.parametersArray.map(i => {
							return <ParameterDiv
								key={i.key}
								id={i.key}
								name={i.name}
								value={i.value}
								deleteParameter={i.deleteParameter}
								onTextChanged={i.onTextChanged}
							/>
						})
					}
				</div>
				{
					this.state.isComputing && <Loader/> || <p>{this.state.computeResult}</p>
				}

				<a href="chart">Здесь можно построить график</a>

				<h3>Последние вычисленные функции:</h3>
				<div id="lastComputedFunctions">	
					{
						this.state.lastComputedFunctions.length === 0 && (<Loader/>)
					}
					{
						this.state.lastComputedFunctions.map(f => 
						{
							return <ComputedFunctionItem 
									key={f.id}
									functionNotation={f.functionNotation}
									parametersAndValues={f.parametersAndValues}
									/>
						})
					}
				</div>
		</div>
		);
	}
	  
}

export default App;
