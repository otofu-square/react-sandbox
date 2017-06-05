// @flow

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 100px 80px;
`;

const Copy = styled.div`
`;

const CopyHeader1 = styled.h1`
  font-size: 140px;
`;

const CopyHeader2 = styled.h2`
  font-size: 60px;
`;

const CopySpan = styled.span`
  color: #ff4a4a;
`;

const Contents = styled.div`
`;

const ContactForm = styled.div`
`;

const Main = () =>
  <Container>
    <Copy>
      <CopyHeader1>HELLO WORLD<CopySpan>.</CopySpan></CopyHeader1>
      <CopyHeader2>プログラミングの世界へようこそ</CopyHeader2>
    </Copy>
    <Contents>
      This is contents.
    </Contents>
    <ContactForm>
      This is contact from.
    </ContactForm>
  </Container>;

export default Main;
