// @flow

import React from 'react'

type Props = {
  num: number,
  decrement: Function,
  increment: Function,
}

const Counter = ({ num, decrement, increment }: Props) =>
  <div>
    <h1>{num}</h1>
    <button onClick={increment}> (+) </button>
    <button onClick={decrement}> (-) </button>
  </div>

export default Counter
