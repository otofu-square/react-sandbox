// @flow

import React from 'react';
import styled from 'styled-components';

type Props = {
  src: string,
  alt: string,
  title: string,
  description: string,
};

const StyleWrapper = styled.div`
`;

const LessonImageWrapper = styled.div`
  position: relative;
`;

const Title = styled.p`
  position: absolute;
  top: 80px;
  width: 100%;
  color: white;
`;

const Description = styled.p`
  width: 80%;
  display: inline-block;
  margin-top: 20px;
  font-size: 12px;
  color: #b3aeb5;
`;

const Lesson = ({ src, alt, title, description }: Props) =>
  <StyleWrapper>
    <LessonImageWrapper>
      <img src={src} alt={alt} />
      <Title>{title}</Title>
    </LessonImageWrapper>
    <Description>{description}</Description>
  </StyleWrapper>;

export default Lesson;
