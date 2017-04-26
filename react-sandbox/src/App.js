import React, { Component } from 'react'

const FunctionalComponent = () =>
  <div>
    <h1>Hello, World</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>

class App extends Component {
  render() {
    return (
      <FunctionalComponent />
    )
  }
}

export default App
