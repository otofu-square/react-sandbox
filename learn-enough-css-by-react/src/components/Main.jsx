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
  height: 500px;
  margin-top: 100px;
`;

const ContentsHeader3 = styled.h3`
  border-bottom: 2px solid #dee7ec;
  font-size: 28px;
  padding-bottom: 15px;
  margin-bottom: 50px;
`;

const ContentsParagraph = styled.p`
  font-size: 24px;
  margin-top: 30px;
`;

const ContentItem = styled.div`
  float: left;
  margin-right: 40px;
`;

const ContactForm = styled.div`
  padding-top: 100px;
`;

const ContactFormHeader3 = styled.h3`
  border-bottom: 2px solid #dee7ec;
  font-size: 28px;
  padding-bottom: 15px;
  margin-bottom: 50px;
`;

const ContactFormInput = styled.input`
  width: 400px;
  margin-top: 10px;
  margin-left: 30px;
  padding: 20px;
  font-size: 18px;
`;

const ContactFormTextarea = styled.textarea`
  width: 400px;
  margin-top: 10px;
  margin-left: 30px;
  padding: 20px;
  font-size: 18px;
`;

const ContactFormSubmit = styled.input`
  width: 400px;
  margin-top: 10px;
  margin-left: 30px;
  padding: 20px;
  font-size: 18px;
  background-color: #dee7ec;
  color: #889eab;
`;

const Main = () =>
  <Container>
    <Copy>
      <CopyHeader1>HELLO WORLD<CopySpan>.</CopySpan></CopyHeader1>
      <CopyHeader2>プログラミングの世界へようこそ</CopyHeader2>
    </Copy>
    <Contents>
      <ContentsHeader3>学べるレッスン</ContentsHeader3>
      <ContentItem>
        <img
          src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/html.svg"
          alt="HTML & CSS"
        />
        <p>HTML & CSS</p>
      </ContentItem>
      <ContentItem>
        <img
          src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/php.svg"
          alt="PHP"
        />
        <p>PHP</p>
      </ContentItem>
      <ContentItem>
        <img
          src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/ruby.svg"
          alt="Ruby"
        />
        <p>Ruby</p>
      </ContentItem>
      <ContentItem>
        <img
          src="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/html/study/swift.svg"
          alt="Swift"
        />
        <p>Swift</p>
      </ContentItem>
    </Contents>
    <ContactForm>
      <ContactFormHeader3>お問い合わせ</ContactFormHeader3>
      <p>メールアドレス（必須）</p>
      <ContactFormInput />

      <p>お問い合わせ内容（必須）</p>
      <ContactFormTextarea />

      <p>※必須項目は必ずご入力ください</p>
      <ContactFormSubmit type="submit" value="送信" />
    </ContactForm>
  </Container>;

export default Main;
