import React, { Component } from "react";
import "./MoviesAndTV.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

class MoviesAndTV extends Component {
  constructor() {
    super();
    this.state = {
      userId: 0,
      messages: [],
      newMessage: ""
    };
    this.newPost = this.newPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  newPost() {
    axios
      .post("/api/MoviesAndTV", {
        message: this.state.newMessage
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          messages: res.data,
          editToggle: false
        });
      });
  }
  deletePost(userId) {
    axios.delete(`/api/MoviesAndTV${userId}`).then(res => {
      this.setState({
        messages: res.data
      });
    });
  }
  editPost(userId, body) {
    axios.put(`/api/MoviesAndTV${userId}`, body).then(res => {
      this.setState({
        messages: res.data
      });
    });
  }
  toggleEdit() {
    this.setState({
      editToggle: !this.state.editToggle
    });
    if (this.state.editToggle && this.state.messages) {
      this.editPost(this.state.messages.userId, {
        name: this.state.messages
      });
    }
  }
  handleChange = event => {
    this.setState({
      newMessage: event.target.value
    });
  };

  render() {
    let { handleChange, newPost, deletePost } = this;
    let { userId, messages, newMessage } = this.state;
    return (
      <div>
        <div className="textBox">
          <header className="chat-header">Lets have a chat about Movies</header>
          <aside className="left-sidebar"></aside>
          <hr />
          {messages.length > 0 ? (
            <section className="chat-screen">
              <ul className="chat-messages">
                {messages.map(el => {
                  return <p key={el.id}>{el.message}</p>;
                })}
              </ul>
            </section>
          ) : (
            <p></p>
          )}
          <hr />
          <footer>
            <input
              type="text"
              name="NewMessage"
              className="message-input"
              placeholder="Speak your mind about Movies and TV!"
              onChange={handleChange}
            />
            <div key={messages.id}>
              <button className="sendButton" onClick={newPost}>
                POST
              </button>
            </div>
            <div key={messages.id}>
              <button
                className="deleteButton"
                onClick={() => this.deletePost(messages.id)}
              >
                Delete
              </button>
            </div>
            <button onClick={() => this.toggleEdit()}>Edit</button>
            <aside className="right-sidebar"></aside>
          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(MoviesAndTV);
