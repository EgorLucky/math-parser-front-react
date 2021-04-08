import React, { Component } from 'react';
import Loader from '../Components/Loader/Loader.js';

import {ChartHandler} from "./ChartHandler";

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
						style={{width:"100%"}}>
						{this.state.expression}
					</textarea>
					<br/>
					<div style={{display:"flex"}}>
						<div>
							Область определений
							<br/> 
							от: 
							<input
								id = "xMin"
								onChange={(e) => this.setState({xMin: e.currentTarget.value})}
								defaultValue={this.state.xMin}/>
							<br/>
							до: 
							<input 
								id = "xMax"
								onChange={(e) => this.setState({xMax: e.currentTarget.value})}
								defaultValue={this.state.xMax}/>
							<br/>
						</div>
						<div>
							с шагом:
							<br/>
							<input
								id = "xStep"
								onChange={(e) => this.setState({xStep: e.currentTarget.value})}
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
						this.state.isComputing? <Loader/> : ""
					}
					{
						this.state.errorMessage
					}
					<canvas 
						id="myChart" 
						style={{width:"400px", height:"400px"}}>
					</canvas>
				</>;
	}
}

export default ChartPage;