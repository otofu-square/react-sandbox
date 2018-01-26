import * as React from 'react';
import styled from 'styled-components';

import { Board } from './Board';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const GameBoard = styled.div``;

const GameInfo = styled.div`
  margin-left: 20px;
`;

export class Game extends React.Component {
  render() {
    return (
      <StyledDiv>
        <GameBoard>
          <Board />
        </GameBoard>
        <GameInfo>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </GameInfo>
      </StyledDiv>
    );
  }
}
