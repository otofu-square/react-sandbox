// @flow

import React from 'react';
import styled from 'styled-components';

import { DevelopButton } from '../Button';

const StyleWrapper = styled.div`
  border-bottom: 1px solid #eee;
  padding-bottom: 80px;
  text-align: center;
`;

const HeadingWrapper = styled.div`
`;

const Heading2 = styled.h2`
`;

const Heading3 = styled.h3`
  font-weight: normal;
`;

const MessageWrapper = () =>
  <StyleWrapper>
    <HeadingWrapper>
      <Heading2>さぁ、あなたもProgateでプログラミングを学んでみませんか?</Heading2>
      <Heading3>{"Let's learn to code, learn to be creative!"}</Heading3>
    </HeadingWrapper>
    <DevelopButton>さっそく開発する</DevelopButton>
  </StyleWrapper>;

export default MessageWrapper;
