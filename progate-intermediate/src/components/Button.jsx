// @flow

import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

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

const SignupButton = Button.extend`
  background-color: #239b76;
`;

const FacebookButton = Button.extend`
  background-color: #3b5998;
`;

const TwitterButton = Button.extend`
  background-color: #55acee;
`;
