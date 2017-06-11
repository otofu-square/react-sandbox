// @flow

import React from 'react';
import styled from 'styled-components';

import { SignupButton, FacebookButton, TwitterButton } from '../Button';
import { FacebookIcon, TwitterIcon } from '../Icon';

const StyleWrapper = styled.div`
  margin: 20px 0;

  p {
    margin: 10px 0;
  }

  span {
    margin-right: 5px;
  }
`;

const StyledFacebookButton = styled(FacebookButton)`
  margin-right: 10px;
`;

const StyledFacebookIcon = styled(FacebookIcon)`
`;

const StyledTwitterIcon = styled(TwitterIcon)`
`;

const ButtonWrapper = () =>
  <StyleWrapper>
    <SignupButton href="#">新規登録はこちら</SignupButton>
    <p>or sign up with</p>
    <StyledFacebookButton href="#">
      <StyledFacebookIcon />
      Facebookで登録
    </StyledFacebookButton>
    <TwitterButton href="#">
      <StyledTwitterIcon />
      Twitterで登録
    </TwitterButton>
  </StyleWrapper>;

export default ButtonWrapper;
