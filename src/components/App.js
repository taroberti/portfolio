import React, { Component } from 'react';
import profile from '../assets/profile.png'
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';

class App extends Component {

  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
        <img src={ profile } alt='profile' className='profile' />
        <h1> Hello! </h1>
        <p>My name is Talita.</p>
        <Title />
        <p>I am learning React.js!</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in Berlin and work for a Software company called Daitan.</p>
              <p>My favorite language is JavaScript, even though I am still learning it.</p>
              <p>Besides coding, I like to dance Ballet and to travel!</p>
              <button onClick={this.toggleDisplayBio}> Show less </button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}> Read More </button>
            </div>
          )
        }

        <hr />
        <Projects />
        <hr />
        <SocialProfiles />

      </div>
    );
  }
}

export default App;
