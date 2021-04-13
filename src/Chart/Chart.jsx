import React, { Component } from 'react';
import Loader from '../Components/Loader/Loader';

import {ChartHandler} from "./ChartHandler";

const xMin = "xMin";
const xMax = "xMax";
const xStep = "xStep";

class ChartPage extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			isComputing: false,
			errorMessage: "",
			expression: "x^2",
			xMin: -15,
			xMax: 15,
			xStep: 1
		};

		this.handler = new ChartHandler(this);

		this.canvasStyle = {
			width:"400px", 
			height:"400px"
		};
	}

	onNumberFieldChanged(property, e) {
		const newState = {};
		newState[property] = Number(e.currentTarget.value);
		this.setState(newState);
	}
	
	render(){
		return <>
					<h3>Построение графика</h3>
					<a href="/">На главную</a>
					<br/>
					Введите выражение f(x):
					<br/>
					<textarea
						onChange={(e) => this.setState({expression: e.currentTarget.value})}
						className='chart-expression-textarea'
						defaultValue={this.state.expression}>
					</textarea>
					<br/>
					<div className="chart-2d-parameter-div">
						<div>
							Область определений
							<br/> 
							от: 
							<input
								onChange={(e) => this.onNumberFieldChanged(xMin, e)}
								defaultValue={this.state.xMin}/>
							<br/>
							до: 
							<input 
								onChange={(e) => this.onNumberFieldChanged(xMax, e)}
								defaultValue={this.state.xMax}/>
							<br/>
						</div>
						<div>
							с шагом:
							<br/>
							<input
								onChange={(e) => this.onNumberFieldChanged(xStep, e)}
								defaultValue={this.state.xStep}/>
							<br/>
							<button 
								disabled={this.state.isComputing}
								onClick={() => this.handler.draw()}>
							Построить
							</button>
						</div>
					</div>
					<br/>
					{
						this.state.isComputing && <Loader/>
					}
					{
						this.state.errorMessage
					}
					<canvas 
						id="myChart" 
						style={this.canvasStyle}>
					</canvas>
				</>;
	}
}

export default ChartPage;