import React from 'react';

import './../css/ComponentsStyles/Footer.css';
import githubLogo from './../css/img/github-logo.png';

export const Footer = () => {
  return (
    <footer>
      <div className="row">
        <h4 className="h4">Created by Alan Pieczonka, 2017</h4>
        <a href="https://github.com/AlanPieczonka/ReactTicTacToe" target="_blank" rel="noopener noreferrer">
          <img
            src={githubLogo}
            className="img--githublogo"
            alt="Github Icon"
          />
        </a>
      </div>
    </footer>
  );
};
