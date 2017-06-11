// @flow

import styled from 'styled-components';

const Button = styled.a`
  padding: 8px 24px;
  color: white;
  display: inline-block;
  opacity: 0.8;
  border-radius: 4px;

  &:hover {
    opacity: 1;
  }
`;

export const SignupButton = Button.extend`
  background-color: #239b76;
`;

export const FacebookButton = Button.extend`
  background-color: #3b5998;
`;

export const TwitterButton = Button.extend`
  background-color: #55acee;
`;

export const DevelopButton = Button.extend`
  padding: 15px 40px;
  background-color: #5dca88;
  cursor: pointer;
  box-shadow: 0px 7px #1a7940;
`;
