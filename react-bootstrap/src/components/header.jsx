// @flow

import React from 'react';

type Props = {
  className: string,
  label: string
}

const Header = ({ className, label }: Props) =>
  <h1 className={className}>{label}</h1>

export default Header
