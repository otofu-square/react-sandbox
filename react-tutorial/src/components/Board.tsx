import * as React from 'react';
import styled from 'styled-components';

import { Square } from './Square';
import { Status } from '../types';

interface State {
  history: Status[][];
  xIsNext: boolean;
}

const BoardRow = styled.div`
  &:after {
    clear: both;
    content: '';
    display: table;
  }
`;

const Status = styled.div`
  margin-bottom: 10px;
`;

const calculateWinner = (squares: Status[]) => {
  const conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const results = conditions.map(condition => {
    const [f, s, t] = condition.map(i => squares[i]);
    return f !== null && f === s && s === t;
  });
  return results.includes(true);
};

export class Board extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      history: [Array<Status>(9).fill(null)],
      xIsNext: true,
    };
  }

  getLatestHistory() {
    return this.state.history[this.state.history.length - 1];
  }

  currentPlayer() {
    return this.state.xIsNext ? 'O' : 'X';
  }

  nextPlayer() {
    return this.state.xIsNext ? 'X' : 'O';
  }

  handleClick(i: number) {
    const { history, xIsNext } = this.state;
    const latestSquares = this.getLatestHistory().slice();
    // tslint:disable
    console.log(history);
    if (
      !latestSquares[i] &&
      this.currentPlayer() !== this.nextPlayer() &&
      !calculateWinner(latestSquares)
    ) {
      latestSquares[i] = this.currentPlayer();
      history.push(latestSquares);
      this.setState({
        history,
        xIsNext: !xIsNext,
      });
    }
  }

  renderSquare(i: number) {
    return (
      <Square
        status={this.getLatestHistory()[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    return (
      <React.Fragment>
        <Status>
          {calculateWinner(this.getLatestHistory())
            ? `Winner: ${this.nextPlayer()}`
            : `Next player: ${this.currentPlayer()}`}
        </Status>
        <BoardRow>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </BoardRow>
        <BoardRow>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </BoardRow>
        <BoardRow>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </BoardRow>
      </React.Fragment>
    );
  }
}
