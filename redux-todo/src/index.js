// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import reducer from './reducers/reducer';

const store = createStore(reducer);

/* eslint-disable react/jsx-filename-extension */
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
