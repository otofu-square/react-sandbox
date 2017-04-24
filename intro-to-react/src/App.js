import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const PLACES = [
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
]

class WeatherDisplay extends Component {
  constructor() {
    super()
    this.state = {
      weatherData: null
    }
  }

  componentDidMount() {
    const zip = this.props.zip
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial`
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({ weatherData: json })
    })
  }

  render() {
    const weatherData = this.state.weatherData
    if (!weatherData) return <div>Loading</div>
    return <div>{JSON.stringify(weatherData)}</div>
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      activePlace: 0,
    }
  }

  render() {
    const activePlace = this.state.activePlace
    return (
      <div className="App">
        <WeatherDisplay zip={PLACES[activePlace].zip}/>
        {PLACES.map((place, index) => (
          <button key={index} onClick={() => this.setState({ activePlace: index })}>
            {place.name}
          </button>
        ))}
      </div>
    )
  }
}

export default App
