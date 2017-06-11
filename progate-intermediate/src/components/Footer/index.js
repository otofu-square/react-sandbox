// @flow

import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  padding-top: 30px;
`;

const Logo = styled.img`
  width: 125px;
`;

const Message = styled.p`
  color: #b3aeb5;
  font-size: 12px;
`;

const Footer = () =>
  <StyleWrapper>
    <Logo src="https://prog-8.com/images/html/advanced/footer_logo.png" />
    <Message>Learn to Code,Learn to be Creative.</Message>
  </StyleWrapper>;

export default Footer;
