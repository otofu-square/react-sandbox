// @flow

import React from 'react';
import styled from 'styled-components';

import { SignupButton, FacebookButton, TwitterButton } from '../Button';
import { FacebookIcon, TwitterIcon } from '../Icon';

const StyleWrapper = styled.div`
  margin: 20px 0;
`;

const P = styled.p`
  margin: 10px 0;
`;

FacebookButton = FacebookButton.extend`
  margin-right: 10px;
`;

FacebookIcon = FacebookIcon.extend`
  margin-right: 5px;
`;

TwitterIcon = TwitterIcon.extend`
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
