import { Observable, AjaxError } from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';
import { Epic } from 'redux-observable';

import { Action, FETCH_REQUEST, fetchSuccess, fetchFailure } from '../actions';
import { State } from '../types';

export const fetchRequestEpic: Epic<Action, State> = (actions$, store) =>
  actions$.ofType(FETCH_REQUEST).mergeMap(action =>
    ajax
      .getJSON<State>('https://jsonplaceholder.typicode.com/posts/0')
      .map(response => fetchSuccess(response))
      .catch((error: AjaxError) =>
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
