import * as React from 'react';
import styled from 'styled-components';

interface Props {
  value: number;
}

interface State {
  value: 'X' | 'O' | null;
}

const StyledButton = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;

  &:focus {
    outline: none;
  }

  &:focus {
    background: #ddd;
  }
`;

export class Square extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <StyledButton onClick={() => this.setState({ value: 'X' })}>
        {this.state.value}
      </StyledButton>
    );
  }
}
