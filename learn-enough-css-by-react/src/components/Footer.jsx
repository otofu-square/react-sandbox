// @flow

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #2f5167;
  color: #fff;
  height: 120px;
  padding: 40px;
`;

const FooterLogo = styled.div`
  font-size: 32px;
  float: left;
`;

const FooterList = styled.div`
  float: right;
`;

const Li = styled.li`
  list-style: none;
  padding-bottom: 20px;
`;

const Footer = () =>
  <Container>
    <FooterLogo>
      Progate
    </FooterLogo>
    <FooterList>
      <ul>
        <Li>会社概要</Li>
        <Li>採用</Li>
        <Li>お問い合わせ</Li>
      </ul>
    </FooterList>
  </Container>;

export default Footer;
