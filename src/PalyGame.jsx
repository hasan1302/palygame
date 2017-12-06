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
        playerOne: localStorage.getItem("playerOneName"), 
        playerOneScore: localStorage.getItem("playerScoreOne"), 
        playerTwo: localStorage.getItem("playerTwoName"), 
        playerTwoScore: localStorage.getItem("playerScoreTwo"), 
        playerTurn: localStorage.getItem("playerTurn"),
        word: ""
    }
  };


  playerScored = () => {
    if  (this.state.playerTurn === (null || "1") ) {
        let score = localStorage.getItem("playerScoreOne") ? 1: 0;
        score++;
        localStorage.setItem("playerTurn", "2");
        localStorage.setItem("playerScoreOne", score)
    } else { 
        let score = (!localStorage.getItem("playerScoreTwo") ? 1: 0);
        score++;
        localStorage.setItem("playerTurn", "1")
        localStorage.setItem("playerScoreTwo", score);
    }

  }

  renderPlayerOne = () => {
      return (
                <div> 
                    <h1> {this.state.playerOne} </h1>
                </div>
            )
  }

 

  submitWord = () => {
    if (this.state.word === "volodimirtrunin") {
        alert("GAME OVER");
        this.setState({winner: localStorage.getItem("playerTurn")})
    }
     if ((palindrome(this.state.word) == true)) {    ///USE REGEXP PALYNDROME
        $.post(postWordUrl, {word: this.state.word} ); 

        ///////////////*^^((((((((((((^(794947974979794779447794479974947479479479479794479)))))))))))))
        if inMongoBase then {v   <-------
        this.playerScored();
        }
/////////////////////////7447144582895599353469004707070047407470470704704470470470            TUT OSTAMOVILSA             !!!!!!!!!!!!!
     } else {alert("Your word is not a palyndrome!")}
  }

  typingWord = (event) => {
      this.setState({word: event.target.value})

  }



  render() {
    return ( 
        <div>
        <h1>PalyGame {this.state.playerOne}: {this.state.playerOneScore} versus {this.state.playerTwo}: {this.state.playerTwoScore}</h1> 
        <form onSubmit={this.submitWord} >
                    <input onChange={this.typingWord} type="text" placeholder="Any Palyndrome Word" name="palyndrome text" required></input>
                    <input type="submit" value="SEND" />
                </form>
        </div>
        
    );

  };
}

export default PalyGame;