import { Observable } from 'rxjs';

import { State } from './types';

const host = 'https://jsonplaceholder.typicode.com';

export const fetchPost = (id: number) =>
  Observable.fromPromise(fetch(`${host}/posts/${id}`).then(res =>
    res.json(),
  ) as Promise<State>);
