// @flow

import { connect } from 'react-redux'

import Board from '../components/Board'
import { toggleSquare } from '../actions/action'

const mapStateToProps = state => ({
  status: state.status,
  isWin: state.isWin,
  squares: state.squares,
})

const mapDispatcherToProps = dispatch => ({
  handleClick: (i) => {
    dispatch(toggleSquare(i))
  }
})

export default connect(mapStateToProps, mapDispatcherToProps)(Board)
