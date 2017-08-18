import React from 'react';

import Square from './Square';

class Main extends React.Component{
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

    render(){
        const nextTurnVar = "X"
        const player = "{player}";
        return(
            <main>
                <div className="row row--center">
                    <h3 className="h3">Player 1: <span className="span span--x">X</span></h3>
                    <h3 className="h3">Player 1: <span className="span span--o">O</span></h3>
                    <h4 className="h4">Next turn: <span className="span span--nextturn span--x">{nextTurnVar}</span></h4>
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
                    <h5 className="h5 h5--win">Player {player} won</h5>
                    <button className="button button--restart">Restart</button>
                </div>
            </main>
        )
    }
}

export default Main;