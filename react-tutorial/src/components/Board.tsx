import * as React from 'react';
import styled from 'styled-components';

import { Square } from './Square';
import { Status } from '../types';

interface State {
  squares: Status[];
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

const calculateWinner = (squares: State['squares']) => {
  const conditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
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
      squares: Array<Status>(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i: number) {
    const { squares, xIsNext } = this.state;
    if (
      !squares[i] &&
      this.currentPlayer() !== this.nextPlayer() &&
      !calculateWinner(this.state.squares)
    ) {
      squares[i] = xIsNext ? 'X' : 'O';
      this.setState({ squares, xIsNext: !xIsNext });
    }
  }

  renderSquare(i: number) {
    return (
      <Square
        status={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  nextPlayer() {
    return this.state.xIsNext ? 'X' : 'O';
  }

  currentPlayer() {
    return this.state.xIsNext ? 'O' : 'X';
  }

  render() {
    return (
      <React.Fragment>
        <Status>
          {calculateWinner(this.state.squares)
            ? `Winner: ${this.currentPlayer()}`
            : `Next player: ${this.nextPlayer()}`}
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
