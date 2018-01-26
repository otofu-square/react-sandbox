import * as React from 'react';
import styled from 'styled-components';

import { Square } from './Square';

const BoardRow = styled.div`
  &:after {
    clear: both;
    content: '';
    display: table;
  }
`;

export class Board extends React.Component {
  renderSquare = (i: number) => <Square value={i} />;

  render() {
    const status = 'Next player: X';
    return (
      <React.Fragment>
        <div className="status">{status}</div>
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
