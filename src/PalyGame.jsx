import $ from 'jquery';
import React, { Component } from 'react';
const postWordUrl = "http://localhost:8000/postword";

class PalyGame extends Component {
  constructor(props) {
    super(props);
    this.state = {playerOne: localStorage.getItem("playerOneName"), playerTwo: localStorage.getItem("playerTwoName"), word: ""}
  };

  renderPolyWordsPlayerOne = () => {
      return (
                <div> 
                    <h1> {this.state.playerOne} </h1>
                </div>
            )
  }

  submitWord = () => {
      if (this.state.word === "palyndrome") {
        $.post(postWordUrl, {
            word: this.state.word
        }); 
      }
  }

  typingWord = (event) => {
      this.setState({word: this.event.target.value})
  }


  render() {
    return ( 
        <div>
        <h1>PalyGame {this.state.playerOne} versus {this.state.playerTwo}</h1> 
        <form onSubmit={this.submitWord} >
                    <input onChange={this.typingWord} type="text" placeholder="Any Palyndrome Word" name="palyndrome text" required></input>
                    <input type="submit" value="SEND" />
                </form>
        </div>
        
    );

  };
}

export default PalyGame;