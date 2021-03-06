import React, { Component } from 'react';
import PalyGamePlayersSubmit from './PalyGamePlayersSubmit';


class PalyGameStart extends Component {
  constructor(props) {
    super(props);
    this.state = {gameStarted: false};
  };

  startGame = () => {
    this.setState({gameSubmitted: true})
    this.setState({gameStarted: true});
  };

  showStartGameMenu = () => {
    return (        
            <div>
              <h1> Start PalyGame </h1>
              <button onClick={this.startGame}> Start Game </button>
            </div>
            );
  };

  render() {
    return ( this.state.gameSubmitted ? <PalyGamePlayersSubmit /> : this.showStartGameMenu() );
  };
}

export default PalyGameStart;
