import * as React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
  color: #ff0000;
`;

const StyledParagrah = styled.h1`
  color: #0000ff;
`;

export const App = () => (
  <>
    <StyledHeader>Hello World</StyledHeader>
    <StyledParagrah>プログラミングの世界へようこそ</StyledParagrah>
  </>
);
