// @flow

import React from 'react';
import styled from 'styled-components';

type Props = {
  src: string,
  alt: string,
};

const StyleWrapper = styled.div`
`;

const Lesson = ({ src, alt }: Props) =>
  <StyleWrapper>
    <div>
      <img src={src} alt={alt} />
      <p />
    </div>
    <p />
  </StyleWrapper>;

export default Lesson;
