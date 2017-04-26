import React, { Component } from 'react'

const formatDate = (date) => date.toLocaleDateString()

const Comment = (props) =>
  <div className="Comment">
    <div className="UserInfo">
      <img
        src=""
        alt=""
        className="Avatar"
      />
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </div>
    <div className="Comment-text">
      {props.text}
    </div>
    <div className="Comment-date">
      {formatDate(props.data)}
    </div>
  </div>

class App extends Component {
  render() {
    return (
      <Comment author={{ author: name }} text="This is a text" data={new Date()}/>
    )
  }
}

export default App
