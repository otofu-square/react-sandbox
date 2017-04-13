import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  CLICK_ACTION_CI,
  CLICK_ACTION_S,
  CLICK_ACTION_T,
  CLICK_ACTION_CR,
} from '../actions/hoge-action'

const initialState = Immutable.fromJS({
  message: 'Initial message'
})

const barReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_ACTION_CI:
      return state.set('message', 'CI')
    case CLICK_ACTION_S:
      return state.set('message', 'S')
    case CLICK_ACTION_T:
      return state.set('message', 'T')
    case CLICK_ACTION_CR:
      return state.set('message', 'CR')
    default:
      return state
  }
}

export default bar
