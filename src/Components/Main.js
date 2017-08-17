import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class Main extends React.Component{
    render(){
        const nextTurnVar = "X"
        return(
            <main>
                <div className="row row--center">
                    <h3 className="h3">Player 1: <span className="span span--x">X</span></h3>
                    <h3 className="h3">Player 1: <span className="span span--o">O</span></h3>
                    <h4 className="h4">Next turn: <span className="span span--nextturn span--x">{nextTurnVar}</span></h4>
                </div>
            </main>
        )
    }
}

export default Main;