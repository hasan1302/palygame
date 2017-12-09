import React, { Component } from 'react';
const secondsPerTurn = 30;
const secondsPerGame = 60;
function palindrome(str) {
    if(str.replace(/[^\w\s]|_/g, "").toLowerCase() === str.replace(/[^\w\s]|_/g, "").toLowerCase().split("").reverse().join("")){
      return true;
    } else {
      return false;
    }
  }
  const styleRed = {
    color: 'red',
  };

class PalyGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
        playerOne: this.props.playerOne, 
        playerOneWords: [],
        playerOneScore: 0, 

        playerTwo: this.props.playerTwo,
        playerTwoWords: [], 
        playerTwoScore: 0, 

        playerTurn: this.props.playerOne,
        word: "",
        words: [""],
        timer: secondsPerTurn,
        timerEndGame: secondsPerGame,
        winner: "",
        gameFinished: false
    }
  };

  componentDidMount() {
      const intervalId = setInterval(this.timer, 1000);
      const intervalIdEndGame = intervalId;
  }

  gameOver = () => {
      this.setState({
        winner: (this.state.playerOneScore > this.state.playerTwoScore) ? this.state.playerOne : this.state.playerTwo,
        gameFinished: true,
    });
    alert("winner is  : " + this.state.winner);
  }

  restartGame = () => {
      this.setState({
          playerOneScore: 0,
          playerTwoScore: 0,
          playerOneWords: [],
          playerTwoWords: [],
          words: [""],
          gameFinished: false,
          playerTurn: this.state.winner,
          timer: secondsPerTurn,
          timerEndGame: secondsPerGame
      })
  }
  showEndGame = () => {
      return (
        <div>
            <h1>The winner is : 
            {this.state.winner} 
            with scores - 
            {this.state.playerOne}:{this.state.playerOneScore}, 
            {this.state.playerTwo}:{this.state.playerTwoScore}  
            </h1>
            <button onClick={this.restartGame}> Restart </button>
        </div>
      );
  }

  timer = () => {
      this.setState({timer: this.state.timer-1, timerEndGame: this.state.timerEndGame-1})
      if (this.state.timerEndGame === 0) {
          this.gameOver();
      }
      if (this.state.timer === 0) {
          this.setState({
              timer: secondsPerTurn,
              playerTurn: (this.state.playerTurn !== this.state.playerOne ? this.state.playerOne : this.state.playerTwo)
        });
         
      }
  }
  
  playerScored = () => {
    let word = this.state.word;
    this.state.words.push(word);
    if (this.state.playerTurn === this.state.playerOne) {
        this.state.playerOneWords.push(word)
        this.setState({playerOneScore: ++this.state.playerOneScore})
    } else {
        this.state.playerTwoWords.push(word)
        this.setState({playerTwoScore: ++this.state.playerTwoScore})
    }
    this.setState({timer: secondsPerTurn});
  }

  submitWord = (event) => { 
        if (palindrome(this.state.word) === true) {
            if (this.state.word.length >3) {
                if (this.state.words.includes(this.state.word)) {
                    alert("This word was said");
                } else {
                    this.playerScored();
                };
            } else {
                alert("This is too short");
            } 
        }else {
            alert("Your word is not a palyndrome!");
        }
        this.setState({
            playerTurn: this.state.playerTurn !== this.state.playerOne ? this.state.playerOne : this.state.playerTwon,
            word: ""
        });
    event.preventDefault();
  }

  typingWord = (event) => {
    if (!isNaN(event.target.value)) {
        alert("Your cant type numbers!");
    } else {
      this.setState({word: event.target.value})
    }
  }

  showWordsPlayerOne = () => {
    if (this.state.playerOneWords.length > 0) {
        return (   
                <div>
                    <h1>Players {this.state.playerOne} words</h1>
                    {this.state.playerOneWords.map((task, i)=>  
                        <h1 key={i}>{this.state.playerOneWords[i]}</h1>  
                    )}
                </div>);
    }
  }


  showWordsPlayerTwo = () => {
    if (this.state.playerTwoWords.length > 0) {
        return (   
                <div>
                    <h1>Player {this.state.playerTwo} words</h1>
                    {this.state.playerTwoWords.map((task, i)=>  
                        <h1 key={i}>{this.state.playerTwoWords[i]}</h1>  
                    )}
                </div>);
    }
  }


  showGame = () => {
      return  (
             <div>
                {this.showWordsPlayerOne()}
                {this.showWordsPlayerTwo()}
                    <h1>{this.state.playerOne} Score : {this.state.playerOneScore} - {this.state.playerTwo} Score: {this.state.playerTwoScore}</h1>  
                    <h1>Players Turn:{this.state.playerTurn}</h1>
                        <form onSubmit={this.submitWord} >
                            <input onChange={this.typingWord} type="text" placeholder="Any Palyndrome Word" name="palyndrome text" value={this.state.word} required></input>
                            <input type="submit" value="SEND" />
                        </form>
                     <h1>Timer: {this.state.timer}</h1>
                     <h1 style={styleRed}>Timer till the game ends : {this.state.timerEndGame} </h1>
            </div>
            );
  }

  showRestartMenu = () => {
      return (
        <div>
            <button> Restart Game </button>
        </div>
      );
  }

  render() {
    return ( (this.state.gameFinished === false) ?this.showGame() :this.showEndGame() )

  };
}

export default PalyGame;