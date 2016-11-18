import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { soundOn, soundOff } from '../actions/index';

class PlaybackControls extends Component {

  showText() {
    if (this.props.sound.playing) {
      return "It's playing!";
    } else if (!this.props.sound.playing) {
      return "It's not playing!";
    } else {
      "Uhh..."
    }
  }

  handleClick() {
    if (this.props.sound.playing) {
      this.props.soundOff();
    } else if (!this.props.sound.playing) {
      this.props.soundOn();
    } else {
      console.log("ERROR: HANDLE CLICK NOT WORKING");
    }
  }

  render() {
    return (
      <div>
        <div>{ this.showText() }</div>
        <button onClick={() => this.handleClick()}>Click Here</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ soundOn, soundOff }, dispatch);
}

function mapStateToProps({ sound }) {
  return { sound };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybackControls);
