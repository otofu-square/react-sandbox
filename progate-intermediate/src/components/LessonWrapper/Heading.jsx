// @flow

import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string,
};

const StyleWrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 30px;
  color: #5f5d60;
`;

const Title = styled.h2`
  font-weight: normal;
`;

const Heading = ({ text }: Props) =>
  <StyleWrapper>
    <Title>{text}</Title>
  </StyleWrapper>;

export default Heading;
