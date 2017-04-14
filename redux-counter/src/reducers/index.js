import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  count: 0,
})

const counterReducer = (state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state.set(state.get('count') + 1)
    case 'DECREMENT':
      return state.set(state.get('count') - 1)
    default:
      return state
  }
}

export default counterReducer
