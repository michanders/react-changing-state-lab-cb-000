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
    if(this.isComplete()) return false;
    ev.preventDefault();
    const newBoard = this.state.board;
    newBoard[i] = this.state.turn

    this.setState({
      board: newBoard,
      turn: this.state.turn === 'X' ? 'O' : 'X'
    });
  }

  getWinner () {
    return this.state.board[this.checkWinner];
  }

  checkWinner() {
    const board = this.state.board;

    for (let i=0; i < solutions.length; i++) {
      return board[solutions[i][0]] && board[solutions[i][0]] === board[solutions[i][1]] && board[solutions[i][1]] === board[solutions[i][2]] ? i : false;
    }
  }

  checkDraw() {
    return !this.state.board.includes(null);
  }

  isComplete () {
    if (!this.state.board.includes(null)) {
      return true
    } 
    else if (this.checkWinner() || this.checkWinner() === 0) {
      return true
    }
    else {
      return false
  }

  render () {
      let status = null;
      if (this.isComplete() && !this.checkDraw()) {
        status = <Status winner={this.getWinner()}/>;
      } else if (this.isComplete()) {
        status = <Status />;
      }
    return (
      <div className='game'>
        <Board board={this.state.board} onClick={this.handleClick} />
        {status}
        <button className='game__reset' onClick={this.handleReset}>Reset Game</button>
      </div>
    );
  }
}
