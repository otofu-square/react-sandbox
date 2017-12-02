// @flow
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element is not exist.');
}

ReactDOM.render(<App />, root);
registerServiceWorker();
