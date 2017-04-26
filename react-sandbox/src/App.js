import React, { Component } from 'react'

const FunctionalComponent = () =>
  <div>
    <h1>Hello, World</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>

class ClassBasedComponent extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <FunctionalComponent />
        <ClassBasedComponent name="World !!" />
      </div>
    )
  }
}

export default App
