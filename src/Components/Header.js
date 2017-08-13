import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="h1">Tic Tac Toe </h1>
        <h2 className="h2">
          Made with <span className="span span--react">React</span>
        </h2>
        <img
          src={require("./../css/img/react-logo.png")}
          className="img--reactlogo"
          alt="React Icon"
        />
      </header>
    );
  }
}

export default Header;
