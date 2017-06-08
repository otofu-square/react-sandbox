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

const StyledFacebookButton = styled(FacebookButton)`
  margin-right: 10px;
`;

const StyledFacebookIcon = styled(FacebookIcon)`
  margin-left: 5px;
`;

const StyledTwitterIcon = styled(TwitterIcon)`
  margin-left: 5px;
`;

const ButtonWrapper = () =>
  <StyleWrapper>
    <SignupButton href="#">新規登録はこちら</SignupButton>
    <P>or sign up with</P>
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
