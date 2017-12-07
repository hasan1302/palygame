import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import PalyGame from './PalyGame';

const submitPlayerStyle = {
  color: 'blue',
};

class PalyGamePlayersSubmit extends Component {

    constructor(props) {
        super(props);
        this.state = {playerOneName: "", playerOneSubmited: false, playerTwoName: "", playerTwoSubmited: false, gameStarted: false };
    }

    submitPlayerOne = (event) => {
        sessionStorage.setItem("playerOneName", this.state.playerOneName);
        sessionStorage.setItem("playerTurn", this.state.playerOneName);
        sessionStorage.setItem("playerScoreOne", 0)
        this.setState({playerOneSubmited: true})
        event.preventDefault();
    }

    submitPlayerTwo = (event) => {
        sessionStorage.setItem("playerTwoName", this.state.playerTwoName);
        sessionStorage.setItem("gameStarted", "true");
        sessionStorage.setItem("playerScoreTwo", 0)
        this.setState({playerTwoSubmited: true, gameStarted: true})
        event.preventDefault();
    }

    typingNamePlayerOne = (event) => {
        this.setState({playerOneName: event.target.value})
    }

    typingNamePlayerTwo = (event) => {
        this.setState({playerTwoName: event.target.value})
    }

    showPlayerOneSubmitMenu = () => {
        return (        
            <div style={submitPlayerStyle}>
                <h1> Player one </h1>
                <form onSubmit={this.submitPlayerOne} >
                    <input onChange={this.typingNamePlayerOne} type="text" placeholder="Player One Name" name="playerOneName" required></input>
                    <input type="submit" value="Play" />
                </form>
            </div>
            );
      };

      showPlayerTwoSubmitMenu = () => {
        return (        
            <div style={submitPlayerStyle}>
                <h1> Player Two </h1>
                <form onSubmit={this.submitPlayerTwo} >
                    <input onChange={this.typingNamePlayerTwo} type="text" placeholder="Player Two Name" name="playerTwoName" required></input>
                    <input type="submit" value="Play" />
                </form>
            </div>
            );
      };

    render() {
        if (sessionStorage.getItem("gameStarted")) {
            return( <PalyGame /> );
        };
        return ( (!sessionStorage.getItem("playerOneName")) ? this.showPlayerOneSubmitMenu() : this.showPlayerTwoSubmitMenu() );
  }


}

export default PalyGamePlayersSubmit;