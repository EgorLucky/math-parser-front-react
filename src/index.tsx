import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ChartPage from './Chart';
import reportWebVitals from './reportWebVitals';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
        <Route path="/" exact component={App} />
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