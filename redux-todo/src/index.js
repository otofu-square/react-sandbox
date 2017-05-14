import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import todoReducer from './reducers/todoReducer';
import visibilityFilterReducer from './reducers/visibilityFilterReducer';

const reducers = combineReducers(todoReducer, visibilityFilterReducer);
const store = createStore(reducers);

/* eslint-disable react/jsx-filename-extension */
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
