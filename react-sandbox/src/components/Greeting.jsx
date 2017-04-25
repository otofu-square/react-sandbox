import React, { Component } from 'react'

class Greeting extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

Greeting.defaultProps = {
  name: 'World!!',
}

export default Greeting
