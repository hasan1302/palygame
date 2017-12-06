import React, { Component } from 'react';

class PlusOne extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ count: ++this.state.count });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Coount {this.state.count}</h1>
                <button>Submit</button>
            </form>
        );
    }
}

export default PlusOne;
