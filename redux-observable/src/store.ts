import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { reducer } from './reducers';
import { fetchRequestEpic } from './epics';

const epicMiddleware = createEpicMiddleware(fetchRequestEpic);

export const store = createStore(reducer, applyMiddleware(epicMiddleware));
