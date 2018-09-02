import React, { Component } from 'react';

import './styles.scss';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import SampleTodo from '../SampleTodo';
import AppHeader from '../../components/AppHeader';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <AppHeader></AppHeader>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/todo" component={SampleTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
