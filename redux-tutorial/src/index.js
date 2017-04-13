import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import Hello from './components/hello';
import './styles/index.css';

ReactDOM.render(
  <Provider>
    <Hello />
  </Provider>,
  document.getElementById('root')
);
