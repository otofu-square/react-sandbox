// @flow
import * as React from 'react';

type Props = {
  onSearch: Function,
};

type State = {
  searchTerm: string,
};

export default class RawForm extends React.Component<Props, State> {
  state = {
    searchTerm: '',
  };

  handleSubmit = (e: SyntheticEvent<*>) => {
    e.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  };

  handleSearch = (e: SyntheticInputEvent<*>) =>
    this.setState({ searchTerm: e.target.value });

  render = () => (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="aiueo"
          value={this.state.searchTerm}
          onChange={this.handleSearch}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
