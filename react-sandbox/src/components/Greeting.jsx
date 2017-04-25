// @flow

import React from 'react'

type Props = {
  name: string,
}

const Greeting = ({ name = 'World!!' }: Props) =>
  <h1>Hello, {name}</h1>

export default Greeting
