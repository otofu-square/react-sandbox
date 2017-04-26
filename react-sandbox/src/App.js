import React, { Component } from 'react'

const formatDate = (date) => date.toLocaleDateString()

const Avater = (props) =>
  <img
    src="props.user.avaterUrl"
    alt="props.user.name"
    className="Avatar"
  />

const UserInfo = (props) =>
  <div className="UserInfo">
    <Avater user={props.user} />
    <div className="UserInfo-name">
      {props.user.name}
    </div>
  </div>

const Comment = (props) =>
  <div className="Comment">
    <UserInfo user={props.author} />
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
