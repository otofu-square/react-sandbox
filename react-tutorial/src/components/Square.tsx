import * as React from 'react';
import styled from 'styled-components';

import { Status } from '../types';

interface ViewProps {
  status: Status;
}

interface ActionProps {
  onClick: (...rest: {}[]) => void;
}

type Props = ViewProps & ActionProps;

const StyledButton = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;

  &:focus {
    outline: none;
  }

  &:focus {
    background: #ddd;
  }
`;

export const Square = ({ status, onClick }: Props) => (
  <StyledButton onClick={onClick}>{status}</StyledButton>
);
