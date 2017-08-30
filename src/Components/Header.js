import React from 'react';

import './../css/ComponentsStyles/Header.css';
import reactLogo from './../css/img/react-logo.png';
export const Header = () => {
  return (
    <header>
      <h1 className="h1">Tic Tac Toe </h1>
      <h2 className="h2">
        Made with <span className="span span--react">React</span>
      </h2>
      <img
        src={reactLogo}
        className="img--reactlogo"
        alt="React Icon"
      />
    </header>
  );
};
