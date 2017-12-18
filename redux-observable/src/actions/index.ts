import { State } from '../types';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export interface Actions {
  FETCH_REQUEST: { type: typeof FETCH_REQUEST };
  FETCH_FAILURE: { type: typeof FETCH_FAILURE };
  FETCH_SUCCESS: {
    type: typeof FETCH_SUCCESS;
    payload: State;
  };
}

export type Action = Actions[keyof Actions];

export const fetchRequest = (): Action => ({
  type: FETCH_REQUEST,
});

export const fetchFailure = (): Action => ({
  type: FETCH_FAILURE,
});

export const fetchSuccess = (payload: State): Action => ({
  type: FETCH_SUCCESS,
  payload,
});
