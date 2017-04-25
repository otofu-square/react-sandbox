import React, { Component } from 'react'

class Water extends Component {
  constructor() {
    super()
    this.state = {
      currentTemp: 10
    }
  }

  stateOfMatter() {
    if (this.state.currentTemp <= 32) {
      return 'Solid'
    } else if (this.state.currentTemp >= 212) {
      return 'Gas'
    } else {
      return 'Liquid'
    }
  }

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.setState({ currentTemp: e.target.value })} value={this.state.currentTemp}/>
        <p>{this.state.currentTemp}F, Water is considered to be a {this.stateOfMatter()}</p>
      </div>
    )
  }
}

export default Water
