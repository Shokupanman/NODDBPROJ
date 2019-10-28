import React, { Component } from "react";
import Stylesheet from "./MusicChat.css";
export default class Video_games extends Component {
  constructor() {
    super();
    this.state = {
      userId: 0,
      messages: []
    };
  }

  handleChange = event => {
    this.setState({
      messages: event.target.value
    });
  };

  render() {
    return (
      <div>
        <header className="chat-header">Lets have a chat about music</header>
        <aside className="left-sidebar"></aside>
        <hr />
        <section className="chat-screen">
          <ul className="chat-messages">THis is a message</ul>
        </section>
        <hr />
        <footer>
          <input
            type="text"
            name="NewMessage"
            className="message-input"
            placeholder="Speak your mind about Music!"
            onChange={this.handleChange}
          />
          <aside className="right-sidebar"></aside>
        </footer>
      </div>
    );
  }
}
