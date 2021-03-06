import React, { Component } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import "./Player.scss";

class Player extends Component {
  render() {
    return (
      <div className="player">
        <div className="player__body">
          <Sidebar />
          <Body />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Player;
