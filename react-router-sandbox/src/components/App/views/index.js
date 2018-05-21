// @flow
import React, { Component } from 'react';

type StateProps = {
  count: number,
};

type DispatchProps = {
  onPlusClick: (...args: any[]) => any,
  onMinusClick: (...args: any[]) => any,
};

type Props = StateProps & DispatchProps;

const App = ({ count, onPlusClick, onMinusClick }: Props) => (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={onPlusClick}>+</button>
    <button onClick={onMinusClick}>-</button>
  </div>
);

export default App;
