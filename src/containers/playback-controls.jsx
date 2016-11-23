import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {soundOn, soundOff} from '../actions/index';
import TempoView from '../components/tempo-view.jsx';
import PlayButton from '../components/play-button.jsx';
import Ink from 'react-ink';
import '../style/playback-controls.scss';

const ripplePos = {
  top: 0,
  right: 0
}

class PlaybackControls extends Component {
    handleClick() {
        const {sound, soundOff, soundOn, audioContext} = this.props;
        if (sound.playing) {
            soundOff(audioContext);
        } else if (!sound.playing) {
            soundOn(audioContext);
        } else {
            console.log("ERROR: HANDLE CLICK NOT WORKING");
        }
    }

    render() {
      const styles = {
        backgroundColor: this.props.sound.color
      }

      return (
          <section id="playback-controls" className="playback-controls-div" style={styles}>
            <Ink />
            <TempoView tempo={this.props.sound.tempo} />
            <PlayButton playing={this.props.sound.playing} click={() => this.handleClick()} />
          </section>
      )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        soundOn,
        soundOff
    }, dispatch);
}

function mapStateToProps({sound}) {
    return {sound};
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybackControls);
