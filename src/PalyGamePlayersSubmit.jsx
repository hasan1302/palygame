import React, { Component } from 'react';
import PalyGame from './PalyGame';
class PalyGamePlayersSubmit extends Component {
    
        constructor(props) {
            super(props);
            this.state = {playerOneName: "", playerOneSubmited: false, playerTwoName: "", playerTwoSubmited: false, gameStarted: false, name: "" };
        }
    
        submitPlayer = (event) => {
            if (!this.state.playerOneSubmited) {
                this.setState({playerOneName: this.state.name, playerOneScore: 0, playerOneSubmited: true, name: ""});
            } else {
                this.setState({playerTwoName: this.state.name, playerTwoScore: 0, playerTwoSubmited: true, name: "", gameStarted: true});
            }

            event.preventDefault();
        }

        typingPlayerName = (event) => {
            this.setState({name: event.target.value})
        }
  
    
        render() {
            if (this.state.gameStarted) {
                return( <PalyGame playerOne={this.state.playerOneName} playerTwo={this.state.playerTwoName}/> );
            };

            return (        
                <div>
                    <h1> {this.state.playerOneSubmited ? "Player One" : "Player Two"}</h1>
                    <form onSubmit={this.submitPlayer} >
                        <input onChange={this.typingPlayerName} type="text" placeholder="Player Name" name="playerName" value={this.state.name} required></input>
                        <input type="submit" value="Play" />
                    </form>
                </div>
                );

      }
    
    
    }
    
    export default PalyGamePlayersSubmit;