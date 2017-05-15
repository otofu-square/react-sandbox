// @flow

import { SET_VISIBILITY_FILTER } from '../actions';

const initialState = {
  visibilityFilter: 'SHOW_ALL',
};

const visibilityFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return { visibilityFilter: action.filter };
    default:
      return state;
  }
};

export default visibilityFilterReducer;
