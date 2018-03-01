import React from 'react';
import Board from './Board';
import Status from './Status';
import solutions from './solutions';

export default class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState({
      board: [null, null, null, null, null, null, null, null, null],
      turn: 'X'
    });
  }


  handleClick (i, ev) {
    if(this.isComplete()) {
      return false;
    }
    ev.preventDefault();

    this.state.board[i] = this.state.turn

    this.setState({
      board: this.state.board,
      turn: this.state.turn === 'X' ? 'O' : 'X'
    });
  }


  getWinner() {
    var board = this.state.board;
    for (let i=0; i < solutions.length; i++) {
      return board[solutions[i][0]] && board[solutions[i][0]] === board[solutions[i][1]] && board[solutions[i][1]] === board[solutions[i][2]] ? board[i] : false;
    }
  }

  isComplete () {
    if (!this.state.board.includes(null)) {
      return true
    }
    else if (this.getWinner === "X" || this.getWinner === "O") {
      return true
    }
    return false
  }

  render () {
    if (this.isComplete() && this.state.board.includes(null)) {
      var status = <Status winner = {this.getWinner()}/>;
    }
    else if (this.isComplete()) {
      var status = <Status />;
    }
    return (
      <div className='game'>
        <Board board={this.state.board} onClick={this.handleClick} />
        <p>{status}</p>
        <button className='game__reset' onClick={this.handleReset}>Reset Game</button>
      </div>
    );
  }
}
