// @flow
import { createStore } from 'redux';
import { counterReducer } from './modules/counter';

export const store = createStore(counterReducer);
