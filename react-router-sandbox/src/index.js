// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element was not found.');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);
registerServiceWorker();
