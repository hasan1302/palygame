import $ from 'jquery';
import React, { Component } from 'react';
const postWordUrl = "http://localhost:8000/postword";

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
        playerOne: sessionStorage.getItem("playerOneName"), 
        playerOneScore: sessionStorage.getItem("playerScoreOne"), 
        playerTwo: sessionStorage.getItem("playerTwoName"), 
        playerTwoScore: sessionStorage.getItem("playerScoreTwo"), 
        playerTurn: sessionStorage.getItem("playerTurn"),
        word: "",
        timer: 30
    }
  };

  componentDidMount() {

  }


  playerScored = () => {
    var timer = setInterval(function() {
        this.setState({timer: this.state.timer-1})
    }, 1000);

    sessionStorage.setItem(this.state.playerTurn, this.state.word);
    if  (this.state.playerTurn === this.state.playerOne ) {
        let score = sessionStorage.getItem("playerScoreOne");
        score++;
        sessionStorage.setItem("playerTurn", this.state.playerTwo);
        sessionStorage.setItem("playerScoreOne", score)
        this.setState({playerOneScore: score, playerTurn: this.state.playerTwo})
    } else { 
        let score = sessionStorage.getItem("playerScoreTwo");
        score++;
        sessionStorage.setItem("playerTurn", this.state.playerOne)
        sessionStorage.setItem("playerScoreTwo", score);
        this.setState({playerTwoScore: score, playerTurn: this.state.playerOne})
    }


  }

  renderPlayerOne = () => {
      return (
                <div> 
                    <h1> {this.state.playerOne} </h1>
                </div>
            )
  }

 

  submitWord = (event) => {
    if (this.state.word === "volodimirtrunin") {
        alert("GAME OVER");
        this.setState({winner: sessionStorage.getItem("playerTurn")})
    }

     if ((palindrome(this.state.word) == true)) {    ///USE REGEXP PALYNDROME
       // $.post(postWordUrl, {word: this.state.word} ); 
        this.playerScored();
     } else {
         alert("Your word is not a palyndrome!");
         let turn = (this.state.playerTurn !== this.state.playerOne ? this.state.playerOne : this.state.playerTwo)
         this.setState({playerTurn: turn});
    }

     this.setState({word: ""})
     event.preventDefault();
  }

  typingWord = (event) => {
      this.setState({word: event.target.value})
  }

  render() {
    return ( 
        <div>
        <h1>PalyGame {this.state.playerOne}: {this.state.playerOneScore} versus {this.state.playerTwo}: {this.state.playerTwoScore}</h1> 
        <h1>Players Turn:{this.state.playerTurn}</h1>
        <h1>Timer: {this.state.timer}</h1>
        <form onSubmit={this.submitWord} >
                    <input onChange={this.typingWord} type="text" placeholder="Any Palyndrome Word" name="palyndrome text" required></input>
                    <input type="submit" value="SEND" />
                </form>
        </div>
        
    );

  };
}

export default PalyGame2;