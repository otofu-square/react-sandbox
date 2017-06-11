// @flow

import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.header`
  height: 65px;
  width: 100%;
  background-color: rgba(34, 49, 52, 0.9);
  top: 0;
  position: fixed;
  z-index: 10;
`;

const LeftWrapper = styled.div`
  float: left;
`;

const RightWrapper = styled.div`
  float: right;
  background-color: rgba(255, 255, 255, 0.3);
  transition: all 0.5s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Logo = styled.img`
  width: 124px;
  margin-top: 20px;
`;

const LoginButton = styled.a`
  display: block;
  line-height: 65px;
  padding: 0 25px 0 25px;
  color: white;
`;

const Header = () =>
  <StyleWrapper>
    <LeftWrapper>
      <Logo src="https://prog-8.com/images/html/advanced/main_logo.png" />
    </LeftWrapper>
    <RightWrapper>
      <LoginButton href="#">ログイン</LoginButton>
    </RightWrapper>
  </StyleWrapper>;

export default Header;
