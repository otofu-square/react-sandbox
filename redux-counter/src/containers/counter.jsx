// @flow

import React from 'react'
import Button from '../components/button'

type Props = {
  value: number,
  onIncrement: Function,
  onDecrement: Function,
}

const Counter = ({ value, onIncrement, onDecrement }: Props) =>
  <p>
    <Button label="+" onClick={}></Button>
    <Button label="-" onClick={}></Button>
    <Button label="Increment" onClick={}></Button>
    <Button label="+" onClick={}></Button>
  </p>

export default Counter
