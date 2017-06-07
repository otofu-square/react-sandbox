import React from 'react';

import Header from './components/Header/index';
import TopWrapper from './components/TopWrapper/index';
import LessonWrapper from './components/LessonWrapper/index';
import MessageWrapper from './components/MessageWrapper/index';
import Footer from './components/Footer/index';

const App = () =>
  <div>
    <Header />
    <TopWrapper />
    <LessonWrapper />
    <MessageWrapper />
    <Footer />
  </div>;

export default App;
