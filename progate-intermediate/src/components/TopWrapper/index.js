// @flow

import React from 'react';
import styled from 'styled-components';

import Container from './Container';

const StyleWrapper = styled.div`
  padding: 180px 0 100px 0;
  background-image: url(https://prog-8.com/images/html/advanced/top.png);
  background-size: cover;
  color: white;
`;

const TopWrapper = () =>
  <StyleWrapper>
    <Container />
  </StyleWrapper>;

export default TopWrapper;
