import React, { Component } from 'react';

const Joke = ({ joke: { setup, punchline } }) => (
  <p style={{ margin: 20 }}> { setup } <em>{ punchline }</em></p>
)

class Jokes extends Component {
  state = { joke: {}, jokes: [] };

  componentDidMount() {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(json => this.setState({ joke: json }))
    .catch(error => alert(error.message));
  }

  getJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
    .then(response => response.json())
    .then(json => this.setState({ jokes: json }))
    .catch(error => alert(error.message));
  }

  render() {

    return(
      <div>
        <h2> Highlighted Joke </h2>
        <Joke joke={ this.state.joke } />
        <hr />
        <h2> Want ten more Jokes? </h2>
        {
          this.state.jokes.map( joke => (
              <Joke key={ joke.id } joke={ joke } />
            ))
        }
        <button onClick={this.getJokes}> Get Ten More Jokes! </button>
      </div>
    );
  }
}

export default Jokes;
