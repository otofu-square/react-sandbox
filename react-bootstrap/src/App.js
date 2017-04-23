// @flow

import React from 'react';

import Header from './components/header'
import './App.css';

const App = () =>
  <div>
    <Header className="a" label="This is a string" />
    <Header className="b" label="This is b string" />
    <Header className="c" label="This is c string" />
  </div>

export default App
