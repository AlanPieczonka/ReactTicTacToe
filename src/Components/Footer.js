import React from 'react';

import './../css/ComponentsStyles/Footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="row">
        <h4 className="h4">Created by Alan Pieczonka, 2017</h4>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img
            src={require('./../css/img/github-logo.png')}
            className="img--githublogo"
            alt="Github Icon"
          />
        </a>
      </div>
    </footer>
  );
};
