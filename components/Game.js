import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null]
      turn: 'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState({
      board: [null, null, null, null, null, null, null, null, null]
      turn: 'X'
    })
  }

  handleClick (i, ev) {
    ev.preventDefault();

    this.setState({
      board: this.state.board,
      turn: this.state.turn === 'X' ? 'O' : 'X'
    });
  }

  getWinner () {
    
  }

  isComplete () {
    if(!this.state.board.includes(null)){
      return true
    }
  }

  render () {
    return (
      <div>
      </div>
    );
  }
}
