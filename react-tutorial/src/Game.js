import React, { Component } from 'react';
import './App.css';
import Square from './Square';
import Board from './Board';

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const currentSquares = history[this.state.stepNumber].squares.slice();
    if (calculateWinner(currentSquares) || currentSquares[i]) {
      return;
    }
    currentSquares[i] = this.state.xIsNext ? 'X' : 'O';
    history.push({squares: currentSquares})
    this.setState({
      history: history,
      stepNumber: (this.state.stepNumber + 1),
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      history: this.state.history.slice(0, step + 1),
      stepNumber: step,
      xIsNext: (step % 2) ? false : true,
    });
  }

  render() {
    const history = this.state.history;
    const currentSquares = history[history.length - 1].squares;
    const winner = calculateWinner(currentSquares);
    const moves = history.map((step, move) => (
      <li key={move}>
        <a href="#" onClick={() => this.jumpTo(move)}>
          {move ? `Move #${move}` : 'Game start'}
        </a>
      </li>
    ));

    let status;
    if (winner) {
      status = `Winner: ${winner}`
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={currentSquares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
