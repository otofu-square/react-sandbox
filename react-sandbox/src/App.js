import React, { Component } from 'react'

import Liquid from './components/Liquid'

class App extends Component {
  render() {
    return (
      <div>
        <Liquid name="Ethaanol" freezing={-173.2} boiling={173.1}/>
      </div>
    )
  }
}

export default App
