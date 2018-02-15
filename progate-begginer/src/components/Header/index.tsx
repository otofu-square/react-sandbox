import * as React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  background-color: #f7f2b4;
  height: 90px;
`;

const HeaderLogo = styled.div`
  font-size: 36px;
  float: left;
`;

const HeaderList = styled.ul`
  float: left;

  & > li {
    list-style: none;
    float: left;
  }
`;

export const Header = () => (
  <StyledDiv>
    <HeaderLogo>Progate</HeaderLogo>
    <HeaderList>
      <li>プログラミングとは</li>
      <li>学べるレッスン</li>
      <li>お問い合わせ</li>
    </HeaderList>
  </StyledDiv>
);
