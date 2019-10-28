import React from "react";
import { Link } from "react-router-dom";
import Routes from "./Routes";
import "./Header.css";

function Header() {
  return (
    <>
      <div></div>
      <header className="Hdawg">
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
        <div className="TrashTalking">
          <h1 className="TTH1">Wanna talk trash??</h1>
          <img
            className="ExtraLogo"
            src="https://www.copyblogger.com/cdn-origin/images/oscar.jpg"
            alt="grouch"
          />
        </div>
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
