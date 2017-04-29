import React from 'react'

type Props = {
  value: string,
  handleClick: Function,
}

const Square = ({ value, handleClick }: Props) =>
  <button className="square" onClick={handleClick}>
    {value}
  </button>

export default Square
