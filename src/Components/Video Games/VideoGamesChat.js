import React, { Component } from "react";
import "./VideoGamesChat.css";
import axios from "axios";
import { withRouter } from "react-router-dom";

class VideoGamesChat extends Component {
  constructor() {
    super();
    this.state = {
      userId: 0,
      messages: [],
      newMessage: "",
      editMessage: "",
      toggleEdit: false
    };
    this.newPost = this.newPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  newPost() {
    console.log(this.state.newMessage);
    axios
      .post("/api/VideoGamesChat", {
        message: this.state.newMessage
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          messages: res.data,
          toggleEdit: false
        });
      });
  }
  deletePost(userId) {
    axios.delete(`/api/VideoGamesChat/${userId}`).then(res => {
      this.setState({
        messages: res.data
      });
    });
  }
  editPost(userId, body) {
    console.log({ body });

    axios.put(`/api/VideoGamesChat/${userId}`, { body }).then(res => {
      console.log("res.data", res.data);
      this.setState({
        messages: res.data,
        toggleEdit: false
      });
    });
  }
  toggleEdit() {
    this.setState({
      toggleEdit: !this.state.toggleEdit
    });
    // if (this.state.toggleEdit && this.state.messages) {
    //   this.editPost(this.state.messages.userId, {
    //     messages: this.state.messages
    //   });
    // }
  }
  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    let { handleChange, newPost } = this;
    let { messages } = this.state;
    console.log(messages);
    let brockenButtons = messages.map(el => (
      <div className="test">
        <div className="divy">
          <p className="testT" key={el.userId}>
            {el.message}
          </p>
          {this.state.toggleEdit === true ? (
            <input
              name="editMessage"
              value={this.state.editMessage}
              className="editInput"
              type="text"
              onChange={event => this.handleChange(event)}
            />
          ) : null}
        </div>
        <button
          className="deleteButton"
          onClick={() => this.deletePost(el.userId)}
        >
          X
        </button>
        {console.log(el)}
        {this.state.toggleEdit ? (
          <button
            className="editButton"
            onClick={() => this.editPost(el.userId, this.state.editMessage)}
          >
            Submit
          </button>
        ) : (
          <button className="editButton" onClick={() => this.toggleEdit()}>
            Edit
          </button>
        )}
      </div>
    ));

    return (
      <div>
        <div className="textBox">
          <header className="chat-header">
            Lets have a chat about VideovGames
          </header>
          <aside className="left-sidebar"></aside>
          <hr />
          {messages.length > 0 ? (
            <div className="messages">{brockenButtons}</div>
          ) : (
            <p></p>
          )}
          <hr />
          <footer>
            <div className="chatBox">
              <input
                type="text"
                value={this.state.newMessage}
                name="newMessage"
                className="message-input"
                placeholder="Speak your mind about VideovGames!"
                onChange={e => handleChange(e)}
              />
              <div>
                <button className="sendButton" onClick={() => newPost()}>
                  POST
                </button>
              </div>
              <aside className="right-sidebar"></aside>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default withRouter(VideoGamesChat);
