import React, { Component } from 'react';

import Search from './Search';
import Artist from './Artist';
import Tracks from './Tracks';

const API_ADDR = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {

  state = {
            artist: null,
            tracks: []
          };

  componentDidMount() {
    this.searchArtist('greatest showman');
  }

  searchArtist = artistQuery => {
    fetch(`${API_ADDR}/artist/${artistQuery}`)
      .then(response => response.json())
      .then(json => {
        if(json.artists.total > 0) {
          const artist = json.artists.items[0];
          this.setState({ artist });
          this.searchTopTracks(artist.id);
        }
      })
      .catch(error => alert(error.message));
  }

  searchTopTracks = artistID => {
    fetch(`${API_ADDR}/artist/${artistID}/top-tracks`)
      .then(response => response.json())
      .then(json => this.setState({ tracks: json.tracks }))
      .catch(error => alert(error.message));
  }

  render() {
    console.log('state: ', this.state);

    return (
      <div>
        <h2> Music Master </h2>

        <Search searchArtist={ this.searchArtist }/>

        <Artist artist={ this.state.artist }/>

        <Tracks tracks={ this.state.tracks } />

      </div>
    );
  }
}

export default App;
