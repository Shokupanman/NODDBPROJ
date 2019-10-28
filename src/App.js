import React from "react";
import "./App.css";
import Header from "./Header";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mainScreen">
        <div className="MSHD">
          <header className="MSHeader">
            <div className="h2Holder">
              <h2>WHY GROUCH CHAT???</h2>
            </div>
          </header>
          <div className="MSP">
            <div className="pHolder">
              <div className="DescriptionHolder">
                <p className="Description">
                  We all have bad opinions! They can range for our passion for
                  terribly unpopular ideas, or even a inabiblty to agree with
                  the masses when it comes to what many find so great. So why
                  come to Grouch-Chat? Well this is the place to come for all
                  your Grouching needs!!! Because here, everything is truley
                  either on mans trash or one mans treasure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
