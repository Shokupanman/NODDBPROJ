import React from "react";
import { Link } from "react-router-dom";
import Routes from "./Routes";
import "./Header.css";

function Header() {
  return (
    <>
      <div></div>
      <header>
        <h1 className="GCTitle">
          <img
            className="logo"
            src="https://i.pinimg.com/originals/15/bc/70/15bc704a72810e10023dfa48858211de.jpg"
            alt="GROUCH"
          />
          <Link className="grouchLink" to="/">
            Grouch-Chat!
          </Link>
        </h1>
      </header>
      <nav>
        <Link to="/api/VideoGames">Video Games Chat</Link>
        <Link to="/api/Music">Music Chat</Link>
        <Link to="/api/MoviesAndTv"> Movies and TV Chat</Link>
      </nav>
      {Routes}

      <div></div>
    </>
  );
}

export default Header;
