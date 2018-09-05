import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { configure } from "mobx";

import App from './views/App';
import registerServiceWorker from './registerServiceWorker';

configure({
  enforceActions: "observed"
});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
