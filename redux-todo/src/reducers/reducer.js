// @flow

import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import visibilityFilterReducer from './visibilityFilterReducer';

export default combineReducers({
  todoReducer,
  visibilityFilterReducer,
});
