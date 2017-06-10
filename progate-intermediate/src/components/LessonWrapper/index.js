// @flow

import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  height: 500px;
  padding-bottom: 80px;
  background-color: #f7f7f7;
`;

const Heading = styled.div`
  padding-top: 60px;
  padding-bottom: 30px;
  color: #5f5d60;

  h2 {
    font-weight: normal;
  }
`;

const Lessons = styled.div`

`;

const LessonWrapper = () =>
  <StyleWrapper>
    <Heading>Learn Where to Get Started!</Heading>
    <Lessons />
  </StyleWrapper>;

export default LessonWrapper;
