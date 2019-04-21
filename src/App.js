import React, { Component } from 'react';
import Player from './Player.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Player source={["https://ia802508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3", "http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"]} />
      </div>
    );
  }
}

export default App;
