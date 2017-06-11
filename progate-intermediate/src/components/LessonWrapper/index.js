// @flow

import React from 'react';
import styled from 'styled-components';

import Heading from './Heading';
import Lesson from './Lesson';

const StyleWrapper = styled.div`
  height: 500px;
  padding-bottom: 80px;
  background-color: #f7f7f7;
  text-align: center;
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
      <Lesson
        src="https://prog-8.com/images/html/advanced/html.png"
        alt="html"
        title="HTML & CSS"
        description="ウェブページの作成に使用される言語です。HTMLとCSSを組み合わせることで、静的なページを作り上げることができます。"
      />
      <Lesson
        src="https://prog-8.com/images/html/advanced/jQuery.png"
        alt="jQuery"
        title="jQuery"
        description="素敵な動きを手軽に実装できるJavaScriptライブラリです。 アニメーション効果をつけたり、Ajax（エイジャックス）を使って外部ファイルを読み込んだりと色々なことができます。"
      />
      <Lesson
        src="https://prog-8.com/images/html/advanced/ruby.png"
        alt="ruby"
        title="Ruby"
        description="オープンソースの動的なプログラミング言語で、 シンプルさと高い生産性を備えています。大きなWebアプリケーションから小さな日用ツールまで、さまざまなソフトウェアを作ることができます。"
      />
      <Lesson
        src="https://prog-8.com/images/html/advanced/php.png"
        alt="php"
        title="PHP"
        description="HTMLだけではページの内容を変えることはできません。PHPはHTMLにプログラムを埋め込み、それを可能にします。"
      />
    </Lessons>
  </StyleWrapper>;

export default LessonWrapper;
