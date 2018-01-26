import * as React from 'react';
import styled from 'styled-components';

import { Square } from './Square';
import { Status } from '../types';

interface State {
  squares: Status[];
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

export class Board extends React.Component<{}, State> {
  handleClick(i: number) {
    const { squares } = this.state;
    if (!squares[i]) {
      squares[i] = 'X';
    }
    this.setState({ squares });
  }

  renderSquare(i: number) {
    return (
      <Square
        status={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  constructor(props: {}) {
    super(props);
    this.state = {
      squares: Array<Status>(9).fill(null),
    };
  }

  render() {
    const status = 'Next player: X';
    return (
      <React.Fragment>
        <Status>{status}</Status>
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
