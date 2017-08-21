import React from 'react';

import Square from './Square';

import {calculateWinner} from './../HelperFunctions/helpers.js';
import { winHighlight } from  './../HelperFunctions/helpers.js';
class Main extends React.Component{
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  componentDidMount(){

  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if(calculateWinner(squares) || squares[i]){ //ignore the click if game is over or square is filled
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return (
      <Square
        number={i}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

    render(){
        const winner = calculateWinner(this.state.squares);
        let playerStatus;
        if(winner){
          playerStatus = 'Winner: ' + winner;
        } else{
          playerStatus = 'Next turn: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return(
            <main>
                <div className="row row--center">
                    <h3 className="h3">Player 1: <span className="span span--x">X</span></h3>
                    <h3 className="h3">Player 2: <span className="span span--o">O</span></h3>
                    <h4 className="h4"><span className="span span--nextturn span--x">{playerStatus}</span></h4>
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
                    <button className="button button--restart" id="buttontest">Restart</button>
                </div>
            </main>
        )
    }
}

export default Main;





