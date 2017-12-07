import React, { Component } from 'react';
import PalyGame from './PalyGame';
class PalyGamePlayersSubmit extends Component {
    
        constructor(props) {
            super(props);
            this.state = {playerOneName: "", playerOneSubmited: false, playerTwoName: "", playerTwoSubmited: false, gameStarted: false };
        }
    
        submitPlayerOne = (event) => {
            this.setState({
                playerOneName: this.state.playerOneName, 
                playerTurn: this.state.playerOneName,
                playerOneScore: 0
            });
            this.setState({playerOneSubmited: true})
           // event.target.value="";
            event.preventDefault();
        }
    
        submitPlayerTwo = (event) => {
            this.setState({
                playerTwoName: this.state.playerTwoName, 
                playerTwoScore: 0
            });
            this.setState({playerTwoSubmited: true, gameStarted: true})
           // event.target.value="";
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
                <div>
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
                <div>
                    <h1> Player Two </h1>
                    <form onSubmit={this.submitPlayerTwo} >
                        <input onChange={this.typingNamePlayerTwo} type="text" placeholder="Player Two Name" name="playerTwoName" required></input>
                        <input type="submit" value="Play" />
                    </form>
                </div>
                );
          };
    
        render() {
            if (this.state.gameStarted) {
                return( <PalyGame playerOne={this.state.playerOneName} playerTwo={this.state.playerTwoName}/> );
            };
            return ( (!this.state.playerOneSubmited) ? this.showPlayerOneSubmitMenu() : this.showPlayerTwoSubmitMenu() );
      }
    
    
    }
    
    export default PalyGamePlayersSubmit;