// @flow

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #26d0c9;
  height: 90px;
`;

const HeaderLogo = styled.div`
  font-size: 36px;
  float: left;
`;

const HeaderList = styled.div`
  float: left;
`;

const Li = styled.li`
  list-style: none;
  float: left;
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
