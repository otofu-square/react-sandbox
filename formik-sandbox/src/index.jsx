// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import './globalStyle';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root');
if (!root) throw new Error('Root element is not exist.');

ReactDOM.render(<App />, root);
registerServiceWorker();
