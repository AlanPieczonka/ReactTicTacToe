import React, { Component } from 'react';

import { Square } from './Square';
import { calculateWinner } from './../HelperFunctions/helpers.js'; //helper function

import './../css/ComponentsStyles/Main.css';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice(); //copy current squares
    if (calculateWinner(squares) || squares[i]) {
      //ignore the click if game is over or square is filled
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares, //update state
      xIsNext: !this.state.xIsNext //switch the currentPlayer bool
    });
  }

  renderSquare(i) {
    return (
      <Square
        fieldNumber={i}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  restartGame = () => {
    //or this.restartGame = this.restartGame.bind(this) in constructor
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true
    });
  };

  render() {
    const winner = calculateWinner(this.state.squares);
    let playerStatus;
    if (winner) {
      playerStatus = 'Winner: ' + winner;
    } else {
      playerStatus = 'Next turn: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <main>
        <div className="row row--center">
          <h3 className="h3">
            <span className="span span--nextturn">
              {playerStatus}
            </span>
          </h3>
        </div>
        <div className="board">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="row row--center">
          <button className="button button--restart" onClick={this.restartGame}>
            Restart
          </button>
        </div>
      </main>
    );
  }
}

export default Main;
