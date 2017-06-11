// @flow

import React from 'react';
import styled from 'styled-components';

import Heading from './Heading';
import Lesson from './Lesson';

const StyleWrapper = styled.div`
  height: 500px;
  padding-bottom: 80px;
  background-color: #f7f7f7;
`;

const Lessons = styled.div`
  > div {
    float: left;
    width: 25%;
  }
`;

const LessonWrapper = () =>
  <StyleWrapper>
    <Heading text="Learn Where to Get Started!" />
    <Lessons>
      <Lesson src="https://prog-8.com/images/html/advanced/html.png" alt="html" />
      <Lesson src="https://prog-8.com/images/html/advanced/jQuery.png" alt="jQuery" />
      <Lesson src="https://prog-8.com/images/html/advanced/ruby.png" alt="ruby" />
      <Lesson src="https://prog-8.com/images/html/advanced/php.png" alt="php" />
    </Lessons>
  </StyleWrapper>;

export default LessonWrapper;
