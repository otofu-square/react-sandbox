// @flow

import React, { Component } from 'react';

type Props = {
  label: string,
  handleClick: Function,
}

const Button = ({ label, handleClick }: Props) =>
  <div>
    <button onClick={handleClick}>label</button>
  </div>

export default Button
