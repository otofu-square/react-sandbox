import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'
import { handleActions } from 'redux-actions'

const initialState = Immutable.fromJS({})

const bar = handleActions(initialState, 0)

export default bar
