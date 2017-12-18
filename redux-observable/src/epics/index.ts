import 'rxjs';
import { Epic } from 'redux-observable';

import { Action, FETCH_REQUEST, fetchSuccess } from '../actions';
import { State } from '../types';

export const fetchRequestEpic: Epic<Action, State> = (actions$, store) =>
  actions$
    .ofType(FETCH_REQUEST)
    .mapTo(fetchSuccess({ id: 10, userId: 10, title: 'title', body: 'body' }));
