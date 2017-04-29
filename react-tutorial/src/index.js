import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './styles/index.css'
import App from './App'
import boardReducer from './reducers/board'

const store = createStore(boardReducer)

const Root = () =>
  <Provider store={store}>
    <App />
  </Provider>

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
