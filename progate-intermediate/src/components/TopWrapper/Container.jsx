// @flow

import React from 'react';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  width: 1170px;
  padding: 0 15px 0 15px;
  margin: 0 auto;
`;

const Catchcopy = styled.h1`
  opacity: 0.7;
  font-size: 45px;
  letter-spacing: 5px;
`;

const Message = styled.p`
  opacity: 0.7;
  font-size: 14px;
`;

const Container = () =>
  <StyleWrapper>
    <Catchcopy>LEARN TO CODE.</Catchcopy>
    <Catchcopy>LEARN TO BE CREATIVE.</Catchcopy>
    <Message>Progateはオンラインプログラミング学習サービスです。</Message>
    <Message>初心者にもやさしいスライドとレッスンで、ウェブサービスを作りながらプログラミングを学んでいきましょう。</Message>
  </StyleWrapper>;

export default Container;
