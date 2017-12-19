import { Observable } from 'rxjs';
// import { ajax } from 'rxjs/observable/dom/ajax';
import { Epic } from 'redux-observable';

import { Action, FETCH_REQUEST, fetchSuccess, fetchFailure } from '../actions';
import { State } from '../types';
import { fetchPost } from '../api';

export const fetchRequestEpic: Epic<Action, State> = (actions$, store) =>
  actions$.ofType(FETCH_REQUEST).mergeMap(action =>
    fetchPost(1)
      .map(response => fetchSuccess(response))
      .catch(error =>
        Observable.of(
          fetchFailure({
            id: error.status,
            userId: error.status,
            title: error.name,
            body: error.message,
          }),
        ),
      ),
  );
