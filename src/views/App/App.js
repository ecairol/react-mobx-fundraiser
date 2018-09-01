import React, { Component } from 'react';

import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About/About';
import AppHeader from '../../components/AppHeader/AppHeader';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <AppHeader></AppHeader>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
