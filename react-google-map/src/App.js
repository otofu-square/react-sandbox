// @flow
import * as React from 'react';
import { isEmpty } from 'ramda';

import './App.css';
import { Search } from './components/Search';
import { Map } from './components/Map';
import { CurrentLocation } from './components/CurrentLocation';
import { LocationList } from './components/LocationList';

type Favorite = {
  address: string,
  timestamp: number,
};

type State = {
  favorites: Favorite[],
  currentAddress: string,
  mapCoordinates: {
    lat: number,
    lng: number,
  },
};

const getFavorites = () => localStorage.getItem('favorites');
const setFavorites = (favorites: Favorite[]) =>
  localStorage.setItem('favorites', JSON.stringify(favorites));

class App extends React.Component<{}, State> {
  state: State = {
    // $ FlowFixMe
    favorites: getFavorites() ? JSON.parse((getFavorites(): string)) : [],
    currentAddress: 'Paris, France',
    mapCoordinates: {
      lat: 48.856614,
      lng: 2.3522219,
    },
  };

  toggleFavorite = (address: string) =>
    this.isAddressInFavorites(address)
      ? this.removeFromFavorites(address)
      : this.addToFavorites(address);

  addToFavorites = (address: string) => {
    const favorites = this.state.favorites;
    favorites.push({
      address: address,
      timestamp: Date.now(),
    });
    this.setState({ favorites: favorites });
    setFavorites(favorites);
  };

  removeFromFavorites = (address: string) => {
    const favorites = this.state.favorites.filter(
      favorite => favorite.address !== address,
    );
    if (isEmpty(favorites)) {
      this.setState({ favorites: favorites });
      setFavorites(favorites);
    }
  };

  isAddressInFavorites = (address: string) =>
    !isEmpty(
      this.state.favorites.filter(favorite => favorite.address === address),
    );

  render = () => (
    <div>
      <h1>Your Google Maps Locations</h1>
      <Search onSearch={this.searchForAddress} />
      <Map
        lat={this.state.mapCoordinates.lat}
        lng={this.state.mapCoordinates.lng}
      />
      <CurrentLocation
        address={this.state.currentAddress}
        favorite={this.isAddressInFavorites(this.state.currentAddress)}
        onFavoriteToggle={this.toggleFavorite}
      />
      <LocationList
        locations={this.state.favorites}
        activeLocationAddress={this.state.currentAddress}
        onClick={this.searchForAddress}
      />
    </div>
  );
}

export default App;
