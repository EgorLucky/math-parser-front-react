import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Loader from '../Components/Loader';

import { ChartHandler } from "./handler";
import { xMin, xMax, xStep } from "./constants";

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

	onExpressionChange = e => this.setState({expression: e.currentTarget.value});

	onXMinChange = e => this.onNumberFieldChanged(xMin, e);

	onXMaxChange = e => this.onNumberFieldChanged(xMax, e);

	onXStepChange = e => this.onNumberFieldChanged(xStep, e);

	draw = () => this.handler.draw();
	
	render(){
		return <>
					<h3>Построение графика</h3>
					<NavLink to="/">На главную</NavLink>
					<br/>
					Введите выражение f(x):
					<br/>
					<textarea
						onChange={this.onExpressionChange}
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
								onChange={this.onXMinChange}
								defaultValue={this.state.xMin}/>
							<br/>
							до: 
							<input 
								onChange={this.onXMaxChange}
								defaultValue={this.state.xMax}/>
							<br/>
						</div>
						<div>
							с шагом:
							<br/>
							<input
								onChange={this.onXStepChange}
								defaultValue={this.state.xStep}/>
							<br/>
							<button 
								disabled={this.state.isComputing}
								onClick={this.draw}>
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