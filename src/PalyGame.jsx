import React, { Component } from 'react';

function palindrome(str) {
    if(str.replace(/[^\w\s]|_/g, "").toLowerCase() === str.replace(/[^\w\s]|_/g, "").toLowerCase().split("").reverse().join("")){
      return true;
    } else {
      return false;
    }
  }


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
        timer: 30,
        gameFinished: false
    }
  };

  componentDidMount() {
      const intervalId = setInterval(this.timer, 1000);
  }

  timer = () => {
      this.setState({timer: this.state.timer-1})
      if (this.state.timer === 0) {
          this.setState({timer: 30});
          this.setState({playerTurn: (this.state.playerTurn !== this.state.playerOne ? this.state.playerOne : this.state.playerTwo)});
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
    this.setState({timer: 30});
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
    return ( (this.state.gameFinished === false) ?this.showGame() :this.showRestartMenu() )

  };
}

export default PalyGame;