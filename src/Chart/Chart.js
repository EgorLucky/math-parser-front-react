import React, { Component } from 'react';
import Loader from '../Components/Loader.js';

import {ChartHandler} from "./ChartHandler";

class ChartPage extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			isComputing: false,
			errorMessage: ""
		};
		
		this.drawButtonRef = React.createRef();
		this.xMinTextBoxRef = React.createRef();
		this.xMaxTextBoxRef = React.createRef();
		this.xStepTextBoxRef = React.createRef();
		this.expressionInputElementRef = React.createRef();

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
						ref={this.expressionInputElementRef} 
						style={{width:"100%"}}>
					x^2
					</textarea>
					<br/>
					<div style={{display:"flex"}}>
						<div>
							Область определений
							<br/> 
							от: 
							<input
								id = "xMin"
								ref={this.xMinTextBoxRef}
								defaultValue="-15"/>
							<br/>
							до: 
							<input 
								id = "xMax"
								type="text" 
								ref={this.xMaxTextBoxRef}
								defaultValue="15"/>
							<br/>
						</div>
						<div>
							с шагом:
							<br/>
							<input
								id = "xStep"
								type="text" 
								ref={this.xStepTextBoxRef}
								defaultValue="1"/>
							<br/>
							<button 
								ref={this.drawButtonRef}
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