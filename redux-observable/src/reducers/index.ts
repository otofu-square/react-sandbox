import {
  FETCH_REQUEST,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  Action,
} from '../actions';
import { State } from '../types';

const initialState = {
  userId: 0,
  id: 0,
  title: 'null',
  body: 'null',
};

export const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case FETCH_REQUEST:
      return state;
    case FETCH_FAILURE:
      return state;
    case FETCH_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
