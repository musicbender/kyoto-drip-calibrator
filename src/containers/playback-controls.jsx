import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { soundOn, soundOff } from '../actions/index';

class PlaybackControls extends Component {
  constructor(props) {
    super(props);

  }

  handleTemp() {
    if (this.props.playing) {
      return "It's playing!";
    } else if (!this.props.playing) {
      return "It's not playing!";
    } else {
      "Uhh..."
    }
  }

  handleClick() {
    console.log(this.props);

    if (this.props.playing) {
      this.props.soundOff();
      console.log("SOUND OFF");
    } else if (!this.props.playing) {
      this.props.soundOn();
      console.log("SOUND ON");
    } else {
      console.log("ERROR: HANDLE CLICK NOT WORKING");
    }
  }

  render() {
    return (
      <div>
        <div>{ this.handleTemp() }</div>
        <button onClick={() => this.handleClick()}>Click Here</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ soundOn, soundOff }, dispatch);
}

function mapStateToProps({ playing }) {
  return { playing };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybackControls);
