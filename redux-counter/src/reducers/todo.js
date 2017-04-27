// @flow

import {
  INCREMENT,
  DECREMENT,
} from '../actions/action'

type State = {
  num: number,
}

const defaultState = {
  num: 0,
}

const todoReducer = (state: State = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, num: state.num + 1 }
    case DECREMENT:
      return { ...state, num: state.num - 1 }
    default:
      return state
  }
}

export default todoReducer
