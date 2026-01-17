import React from "react";
import porco from "../assets/porco.png";

function Nav() {
  return (
    <div className="navWrapper">
      <span className="headerText">HogWild</span>
      <div className="TwirlyPig">
        <img src={porco} alt="piggy" className="App-logo" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
  );
}

export default Nav;
