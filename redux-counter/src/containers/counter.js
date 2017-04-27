// @flow

import { connect } from 'react-redux'

import Counter from '../components/Counter'
import {
  increment,
  decrement,
} from '../actions/action'

const mapStateToProps = state => ({
  num: state.num,
})

const mapDispatcherToProps = dispatch => ({
  increment: () => {
    dispatch(increment())
  },
  decrement: () => {
    dispatch(decrement())
  },
})

export default connect(mapStateToProps, mapDispatcherToProps)(Counter)
