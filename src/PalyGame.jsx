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
<<<<<<< HEAD
        playerOne: this.props.playerOne, 
        playerOneWords: [],
        playerOneScore: 0, 

        playerTwo: this.props.playerTwo,
        playerTwoWords: [], 
        playerTwoScore: 0, 

        playerTurn: this.props.playerOne,
        word: "",
        words: [""],
        timer: 30
=======
        playerOne: localStorage.getItem("playerOneName"),
        playerOneScore: localStorage.getItem("playerScoreOne"),
        playerTwo: localStorage.getItem("playerTwoName"),
        playerTwoScore: localStorage.getItem("playerScoreTwo"),
        playerTurn: localStorage.getItem("playerTurn"),
        word: ""
>>>>>>> origin/master
    }
  };

  componentDidMount() {
      var intervalId = setInterval(this.timer, 1000);
  }

  timer = () => {
      this.setState({timer: this.state.timer-1})
      if (this.state.timer === 0) {
          this.setState({timer: 30});
          this.setState({playerTurn: (this.state.playerTurn !== this.state.playerOne ? this.state.playerOne : this.state.playerTwo)});
      }
  }
  
  playerScored = () => {
<<<<<<< HEAD
    let word = this.state.word;
    this.state.words.push(word);
    if (this.state.playerTurn === this.state.playerOne) {
        this.state.playerOneWords.push(word)
        this.setState({playerOneScore: ++this.state.playerOneScore})
    } else {
        this.state.playerTwoWords.push(word)
        this.setState({playerTwoScore: ++this.state.playerTwoScore})
=======
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
>>>>>>> origin/master
    }
    this.setState({timer: 30});
  }

<<<<<<< HEAD
  submitWord = (event) => {
    if (palindrome(this.state.word) === true) {
        if (this.state.words.includes(this.state.word)) {
            alert("This word was said");
        } else {
            this.playerScored();
        };
    }
    else {
        alert("Your word is not a palyndrome!");
    };

    this.setState({
        playerTurn: (this.state.playerTurn !== this.state.playerOne ? this.state.playerOne : this.state.playerTwo), 
        word: "",
        timer: 30
    });

    event.preventDefault();
  }

  typingWord = (event) => {
      this.setState({word: event.target.value})
  }

  showWordsPlayerOne = () => {
    if (this.state.playerOneWords.length > 0) {
        return (   
                <div>
                    <h1>Players {this.state.playerOne} words</h1>
                    {this.state.playerOneWords.map((task, i)=>  
                        <h1>{this.state.playerOneWords[i]}</h1>  
                    )}
                </div>);
    }
  }


  showWordsPlayerTwo = () => {
    if (this.state.playerTwoWords.length > 0) {
        return (   
                <div>
                    <h1>Players {this.state.playerTwo} words</h1>
                    {this.state.playerTwoWords.map((task, i)=>  
                        <h1>{this.state.playerTwoWords[i]}</h1>  
                    )}
                </div>);
    }
=======
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
        // if inMongoBase then {v   <-------
        this.playerScored();
        // }
/////////////////////////7447144582895599353469004707070047407470470704704470470470            TUT OSTAMOVILSA             !!!!!!!!!!!!!
     } else {alert("Your word is not a palyndrome!")}
  }

  typingWord = (event) => {
      this.setState({word: event.target.value});
>>>>>>> origin/master
  }



  render() {
    return (
        <div>
<<<<<<< HEAD
            {this.state.currentCount}
            {this.showWordsPlayerOne()}
            {this.showWordsPlayerTwo()}
            <h1>{this.state.playerOne} Score : {this.state.playerOneScore} - {this.state.playerTwo} Score: {this.state.playerTwoScore}</h1>  

            <h1>Players Turn:{this.state.playerTurn}</h1>

            <form onSubmit={this.submitWord} >
                <input onChange={this.typingWord} type="text" placeholder="Any Palyndrome Word" name="palyndrome text" required></input>
                <input type="submit" value="SEND" />
            </form>

            <h1>Timer: {this.state.timer}</h1>
        </div>
        
        
        
=======
        <h1>PalyGame {this.state.playerOne}: {this.state.playerOneScore} versus {this.state.playerTwo}: {this.state.playerTwoScore}</h1>
        <form onSubmit={this.submitWord} >
                    <input onChange={this.typingWord} type="text" placeholder="Any Palyndrome Word" name="palyndrome text" required></input>
                    <input type="submit" value="SEND" />
                </form>
        </div>

>>>>>>> origin/master
    );

  };
}

export default PalyGame;
