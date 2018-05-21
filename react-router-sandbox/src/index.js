// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element was not found.');

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(Root, rootElement);
registerServiceWorker();
