// @flow
import * as React from 'react';

type Props = {
  address: string,
  favorite: string,
  onFavoriteToggle: Function,
};

class CurrentLocation extends React.Component<Props> {
  toggleFavorite = () => this.props.onFavoriteToggle(this.props.address);

  render() {
    return (
      <div className="col-xs-12 col-md-6 col-md-offset-3 current-location">
        <h4 id="save-location">{this.props.address}</h4>
        <span
          className={
            this.props.favorite
              ? 'glyphicon glyphicon-star'
              : 'glyphicon glyphicon-star-empty'
          }
          onClick={this.toggleFavorite}
          aria-hidden="true"
        />
      </div>
    );
  }
}

export default CurrentLocation;
