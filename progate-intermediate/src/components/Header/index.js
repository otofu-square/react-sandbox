// @flow

import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.header`
  height: 65px;
  width: 100%;
  background-color: rgba(34, 49, 52, 0.9);
`;

const Logo = styled.img`
  width: 124px;
  margin-top: 20px;
`;

const Header = () =>
  <StyleWrapper>
    <Logo src="https://prog-8.com/images/html/advanced/main_logo.png" />
  </StyleWrapper>;

export default Header;
