// @flow

import React from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'

type Props = {
  className: string,
  label: string,
}

export const DefaultButton = ({ className, label }: Props) =>
  <Button className="{className}">{label}</Button>

export const PrimaryButton = ({ className, label }: Props) =>
  <Button bsStyle="primary">{label}</Button>

export const SuccessButton = ({ className, label }: Props) =>
  <Button bsStyle="success">{label}</Button>

export const InfoButton = ({ className, label }: Props) =>
  <Button bsStyle="info">{label}</Button>

export const WarningButton = ({ className, label }: Props) =>
  <Button bsStyle="warning">{label}</Button>

export const DangerButton = ({ className, label }: Props) =>
  <Button bsStyle="danger">{label}</Button>

export const LinkButton = ({ className, label }: Props) =>
  <Button bsStyle="link">{label}</Button>
