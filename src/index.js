import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Register from './Register';
import Entrance from './Entrance';
import CheckIn from './CheckIn';
import Order from './Order';
import Admin from './Admin';
import * as serviceWorker from './serviceWorker';

// const routing = (
//     <Router>
//       <div>
//         <Route path="/" component={App} />
//         <Route path="/register" component={Register} />
//       </div>
//     </Router>
//   )
const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/entrance" component={Entrance} />
        <Route path="/checkin" component={CheckIn} />
        <Route path="/order" component={Order} />
        <Route path="/admin" component={Admin} />
      </div>
    </Router>
  )
  
  
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
