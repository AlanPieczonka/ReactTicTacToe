import React, { Component } from 'react';

import Square from './Square';

class Main extends React.Component{
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
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                    <Square />
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