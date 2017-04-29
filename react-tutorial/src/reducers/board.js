// @flow

import { TOGGLE_SQUARE } from '../actions/action'

type State = {
  status: string,
  squares: Array,
}

const caluculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

const defaultState = {
  status: 'X',
  isWin: false,
  squares: Array(9).fill(null),
}

const boardReducer = (state: State = defaultState, action) => {
  const index = action.payload
  const status = state.status
  const isWin = state.isWin
  const squares = state.squares.slice()
  switch (action.type) {
    case TOGGLE_SQUARE:
      if (squares[index] || isWin) return state
      squares[index] = status
      if (caluculateWinner(squares)) {
        return { ...state, isWin: true, squares: squares }
      } else if (status === 'O') {
        return { ...state, status: 'X', squares: squares }
      } else {
        return { ...state, status: 'O', squares: squares }
      }
    default:
      return state
  }
}

export default boardReducer
