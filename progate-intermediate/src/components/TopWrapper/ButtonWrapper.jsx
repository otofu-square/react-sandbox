// @flow

import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const StyleWrapper = styled.div`
  margin: 20px 0;
`;

const P = styled.p`
  margin: 10px 0;
`;

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
  margin-right: 10px;
`;

const TwitterButton = Button.extend`
  background-color: #55acee;
`;

const FacebookIcon = styled.span`
  margin-right: 5px;
`;

const TwitterIcon = styled.span`
  margin-right: 5px;
`;

const ButtonWrapper = () =>
  <StyleWrapper>
    <SignupButton href="#">新規登録はこちら</SignupButton>
    <P>or sign up with</P>
    <FacebookButton href="#">
      <FacebookIcon className="fa fa-facebook" />
      Facebookで登録
    </FacebookButton>
    <TwitterButton href="#">
      <TwitterIcon className="fa fa-twitter" />
      Twitterで登録
    </TwitterButton>
  </StyleWrapper>;

export default ButtonWrapper;
