import React from "react";

export const Footer = () => {
    return (
      <footer>
        <div className="row">
          <h6 className="h6">Created by Alan Pieczonka, 2017</h6>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img
              src={require("./../css/img/github-logo.png")}
              className="img--githublogo"
              alt="Github Icon"
            />
          </a>
        </div>
      </footer>
    );
  };


