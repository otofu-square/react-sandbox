// @flow

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #26d0c9;
  color: #fff;
  height: 90px;
`;

const HeaderLogo = styled.div`
  font-size: 36px;
  float: left;
  padding: 20px 40px;
`;

const HeaderList = styled.div`
  float: left;
`;

const Li = styled.li`
  list-style: none;
  float: left;
  padding: 33px 20px;
`;

const Header = () =>
  <Container>
    <HeaderLogo>
      Progate
    </HeaderLogo>
    <HeaderList>
      <ul>
        <Li>プログラミングとは</Li>
        <Li>学べるレッスン</Li>
        <Li>お問い合わせ</Li>
      </ul>
    </HeaderList>
  </Container>;

export default Header;
