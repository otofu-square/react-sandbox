// @flow

import { TOGGLE_SQUARE } from '../actions/action'

type State = {
  status: string,
  squares: Array,
}

const defaultState = {
  status: 'X',
  squares: Array(9).fill(null),
}

const boardReducer = (state: State = defaultState, action) => {
  const index = action.payload
  const status = state.status
  const squares = state.squares.slice()

  switch (action.type) {
    case TOGGLE_SQUARE:
      if (squares[index]) return state
      squares[index] = status
      if (status === 'O') {
        return { ...state, status: 'X', squares: squares }
      } else {
        return { ...state, status: 'O', squares: squares }
      }
    default:
      return state
  }
}

export default boardReducer
