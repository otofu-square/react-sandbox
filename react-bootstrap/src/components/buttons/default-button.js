// @flow

import React from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'

type Props = {
  className: string,
  label: string,
}

const DefaultButton = ({ className, label }: Props) =>
  <ButtonToolbar>
    <Button className="{className}">{label}</Button>
  </ButtonToolbar>

export default DefaultButton
