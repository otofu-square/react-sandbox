import * as React from 'react';

import { State } from '../types';

export type ViewProps = State;
export type ActionProps = {
  onClick: () => void;
};
type Props = ViewProps & ActionProps;

export const App = ({ userId, id, title, body, onClick }: Props) => (
  <div>
    <h1>{userId}</h1>
    <h1>{id}</h1>
    <h1>{title}</h1>
    <h1>{body}</h1>
    <button onClick={onClick}>fetch</button>
  </div>
);
