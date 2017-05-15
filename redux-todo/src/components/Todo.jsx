// @flow

import React from 'react';

type Props = {
  onClick: Function,
  completed: boolean,
  text: string,
};

const Todo = ({ onClick, completed, text }: Props) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    {text}
  </li>
);

export default Todo;
