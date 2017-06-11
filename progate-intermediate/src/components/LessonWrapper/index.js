// @flow

import React from 'react';
import styled from 'styled-components';

import Heading from './Heading';

const StyleWrapper = styled.div`
  height: 500px;
  padding-bottom: 80px;
  background-color: #f7f7f7;
`;

const Lessons = styled.div`
`;

const LessonWrapper = () =>
  <StyleWrapper>
    <Heading text="Learn Where to Get Started!" />
    <Lessons />
  </StyleWrapper>;

export default LessonWrapper;
