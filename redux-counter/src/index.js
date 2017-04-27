import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import todoReducer from './reducers/todo'
import App from './App'
import './index.css'

const store = createStore(todoReducer)

const Root = () =>
  <Provider store={store}>
    <App />
  </Provider>

ReactDOM.render(
  <Root />,
  document.getElementById('root')
)
