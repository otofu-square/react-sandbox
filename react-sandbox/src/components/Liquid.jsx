import React, { Component } from 'react'

class Liquid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTemp: 10
    }
  }

  stateOfMatter() {
    if (this.state.currentTemp <= this.props.freezing) {
      return 'Solid'
    } else if (this.state.currentTemp >= this.props.boiling) {
      return 'Gas'
    } else {
      return 'Liquid'
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ currentTemp: e.target.value })}
          value={this.state.currentTemp}
        />
        <p>{this.state.currentTemp}F, {this.props.name} is considered to be a {this.stateOfMatter()}</p>
      </div>
    )
  }
}

export default Liquid
