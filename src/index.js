import React from 'react';
import ReactDOM from 'react-dom';
import { Router, ReactLocation, Link, Outlet } from 'react-location';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const location = new ReactLocation();

const routes = [{
  path: '/',
  element: <App/>,
},{
  path: '/about',
  element: <h1>About</h1>,
},{
  path: '/meta',
  element: <h1>...</h1>,
}];

ReactDOM.render(
  <React.StrictMode>
    <Router location={location}
	    routes={routes}>
      <div>
	<h1>fleetmdb</h1>
        <Link to="/">
          Home
        </Link>{" "}
        <Link to="/about">
          About
        </Link>{" "}
        <Link to="/meta">
          Meta
        </Link>
      </div>
      <hr />
      <Outlet /> 
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
