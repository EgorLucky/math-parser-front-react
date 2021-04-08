import React, { Component } from 'react';

import AppDescription from '../Components/AppDescription.js';
import ParameterDiv from '../Components/Parameter.js';
import ComputedFunctionItem from '../Components/ComputedFunctionItem.js';
import Loader from '../Components/Loader.js';

import {IndexHandler} from "./IndexHandler";


class Index extends Component {
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

	render () {
		return (
		<div className="App">
				<AppDescription/>
				Введите выражение:
				<br/>
				<textarea
					style={{width:'100%', height:'20%'}}
					onChange={(e) => this.setState({expression: e.currentTarget.value})}>
						{this.state.expression}
				</textarea>
				<br/>
				<button
						disabled={this.state.isComputing}
						onClick={() => this.handler.computeButtonClicked()}>
					Посчитать
				</button>
				<button id="addParameterButton" 
						onClick={() => this.handler.addParameter()}>
					Добавить параметр
				</button>
				<br/>
				<div id="parameters">
					{
						this.state.parametersArray.map(i => {
							return <ParameterDiv
								_key={i.key}
								name={i.name}
								value={i.value}
								deleteParameter={i.deleteParameter}
								onTextChanged={i.onTextChanged}
							/>
						})
					}
				</div>
				<p>
					{
						this.state.isComputing? 
							(<Loader/>) : 
						 	(this.state.computeResult)
					}
				</p>

				<a href="chart">Здесь можно построить график</a>

				<h3>Последние вычисленные функции:</h3>
				<div id="lastComputedFunctions">	
					{
						this.state.lastComputedFunctions.length == 0? 
						(<Loader/>) : 
						""
					}
					{
						this.state.lastComputedFunctions.map(f => 
						{
							return <ComputedFunctionItem 
									functionNotation={f.functionNotation}
									parametersAndValues={f.parametersAndValues}
									/>
						})
					}
				</div>
		</div>
		);
	}
	
	componentDidMount() {
		this.handler.componentDidMount();
	}
	  
}

export default Index;
