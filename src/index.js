import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Index/Index';
import ChartPage from './Chart/Chart';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  
  <Router>
		<Switch>
			<Route exact path="/" component={Index} />
			<Route exact path="/index" component={Index} />
			<Route path="/chart" component={ChartPage} />
			
		</Switch>
	</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

//<React.StrictMode>
//    <App />
//  </React.StrictMode>

//<Route component={NotFound} />