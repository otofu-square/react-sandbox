// @flow
import { INCREMENT, DECREMENT } from './actionTypes';

type State = {
  count: number,
};

const initialState = {
  count: 0,
};

// $FlowFixMe
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
