import React, {Component} from 'react';

class PlayerWords extends Component {
    constructor(props) {
    super(props);
    this.state = {
        playerName: this.props.playerName,
        playerWords: this.props.playerWords
    };
    }

    render() {
        if (this.state.playerWords.length < 1) {
            return null;
        };

        return (   
                <div>
                    <h1>Player {this.state.playerName} words</h1>
                    {this.state.playerWords.map((task, i)=>  
                    <h1 key={i}>{this.state.playerWords[i]}</h1>)}
                </div>
                );
        
    }


}
        
    
export default PlayerWords;        