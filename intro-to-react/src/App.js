import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class WeatherDisplay extends Component {
  render() {
    return (
      <h1>Displaying weather for city {this.props.zip}</h1>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherDisplay zip={"12345"}/>
      </div>
    )
  }
}

export default App
