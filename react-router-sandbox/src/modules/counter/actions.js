// @flow
import * as actionTypes from './actionTypes';

const increment = () => ({ type: actionTypes.INCREMENT });
const decrement = () => ({ type: actionTypes.DECREMENT });

export const actions = {
  increment,
  decrement,
};
