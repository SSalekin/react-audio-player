import React, { Component } from 'react';
import _ from 'underscore';
import './Player.css';

class Player extends Component {
  constructor(props) {
    super(props);

    let track = "";
    if(Array.isArray(this.props.source)) {
      track = this.props.source[0];
    } else {
      track = this.props.source;
    }

    this.state = {
      source: this.props.source,
      track: track
    }

    this.playClick = this.playClick.bind(this);
    this.togglePlaybackIcon = this.togglePlaybackIcon.bind(this);
    this.forwardClick = this.forwardClick.bind(this);
    this.backwordClick = this.backwordClick.bind(this);
    this.previousTrackClick = this.previousTrackClick.bind(this);
    this.nextTrackClick = this.nextTrackClick.bind(this);
  }

  componentDidMount = () => {
    const player = document.getElementById("player");
    if(!player.paused) {
      this.togglePlaybackIcon();
    }
  }

  togglePlaybackIcon = () => {
    const playButton = document.getElementById("play");
    const playIcon = document.getElementById("playIcon");
    playButton.classList.toggle("focused");
    playIcon.classList.toggle("fa-pause");
    playIcon.classList.toggle("fa-play");
  }

  playClick = (doNotToggleIcon = false) => {
    const player = document.getElementById("player");
    player.paused ? player.play() : player.pause();
    this.togglePlaybackIcon();
  };

  forwardClick = () => {
    const player = document.getElementById("player");
    if(!player.paused) {
      player.currentTime += 1
    }
  };

  backwordClick = () => {
    const player = document.getElementById("player");
    if(!player.paused) {
      player.currentTime -= 1
    }
  };

  nextTrackClick = () => {
    if(Array.isArray(this.state.source)) {
      let currentTrackIndex = _.indexOf(this.state.source, this.state.track);

      let nextTrack = this.state.source[currentTrackIndex+1]
      if(nextTrack === undefined) {nextTrack = this.state.track}
      
      this.setState({
        track: nextTrack
      })
      this.playClick();
    }
  };

  previousTrackClick = () => {
    if(Array.isArray(this.state.source)) {
      let currentTrackIndex = _.indexOf(this.state.source, this.state.track);
      let previousTrack = this.state.source[currentTrackIndex-1]

      if(previousTrack === undefined) {previousTrack = this.state.track}

      this.setState({
        track: previousTrack
      })

      this.playClick();
    }
  };

  render() {
    return (
      <div className="player">
        <audio id="player" onEnded={this.togglePlaybackIcon} src={this.state.track}></audio>
        <button id="play" onClick={this.playClick}><i id="playIcon" className="fas fa-play"></i></button>
        <button id="forward" onClick={this.forwardClick}><i className="fas fa-forward"></i></button>
        <button id="backword" onClick={this.backwordClick}><i className="fas fa-backward"></i></button>
        <button id="next" onClick={this.nextTrackClick}><i className="fas fa-angle-double-right"></i></button>
        <button id="prev" onClick={this.previousTrackClick}><i className="fas fa-angle-double-left"></i></button>
      </div>
    );
  }
}

export default Player;
