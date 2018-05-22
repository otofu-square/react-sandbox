// @flow
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import type { BrowserHistory } from 'history';
import { counterReducer } from './modules/counter';

export const configureStore = (history: BrowserHistory) =>
  createStore(
    combineReducers({
      counter: counterReducer,
      routing: routerReducer,
    }),
    applyMiddleware(routerMiddleware(history)),
  );
