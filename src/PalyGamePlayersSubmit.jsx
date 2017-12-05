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

    submitPlayerOne = () => {
        localStorage.setItem("playerOneName", this.state.playerOneName);
        this.setState({playerOneSubmited: true})
    }

    submitPlayerTwo = () => {
        localStorage.setItem("playerTwoName", this.state.playerTwoName);
        localStorage.setItem("gameStarted", "true");
        this.setState({playerTwoSubmited: true, gameStarted: true})
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
        if (localStorage.getItem("gameStarted")) {
            return( <PalyGame /> );
        };
        return ( (!localStorage.getItem("playerOneName")) ? this.showPlayerOneSubmitMenu() : this.showPlayerTwoSubmitMenu() );
  }


}

export default PalyGamePlayersSubmit;