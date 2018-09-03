import React, { Component } from 'react';
import { observer, Provider } from 'mobx-react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './_styles.scss';
import Home from '../Home';
import About from '../About';
import NewProject from '../NewProject';
import AppHeader from './components/AppHeader';

import ProjectStore from '../../stores/Projects';

const projectStore = new ProjectStore();

@observer
class App extends Component {
  render() {
    return (
      <Provider project={projectStore}>
        <Router>
          <div className="app">
            <AppHeader></AppHeader>
            <Route path="/" exact={true} component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects/new" component={NewProject} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
