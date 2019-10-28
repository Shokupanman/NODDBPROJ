import React, { Component } from "react";
import Stylesheet from "./VideoGamesChat.css";

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
        <header className="chat-header">
          {" "}
          Lets have a chat about Video Games
        </header>
        <hr />
        <aside className="left-sidebar"></aside>
        <section className="chat-screen">
          <ul className="chat-messages">THis is a message</ul>
        </section>
        <hr />
        <footer>
          <input
            type="text"
            name="NewMessage"
            className="message-input"
            placeholder="Speak your mind about VideoGames!"
            onChange={this.handleChange}
          />
          <aside className="right-sidebar"></aside>
        </footer>
      </div>
    );
  }
}
