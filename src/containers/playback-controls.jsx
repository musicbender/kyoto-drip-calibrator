import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {soundOn, soundOff, changeRipple} from '../actions/index';
import TempoView from '../components/tempo-view.jsx';
import PlayButton from '../components/play-button.jsx';
import Tick from '../components/tick.jsx';
import Ripple from '../components/ripple.jsx';
import '../style/playback-controls.scss';

class PlaybackControls extends Component {
    handleClick() {
        const {sound, soundOff, soundOn, audioContext} = this.props;
        if (sound.playing) {
            soundOff(audioContext);
        } else if (!sound.playing) {
            soundOn(audioContext);
        }
    }

    renderTick() {
      const {sound, speed, audioContext} = this.props;
      if (sound.playing) {
          return (
            <Tick
            ctx={audioContext}
            tempo={speed.tempo}
            changeRipple={this.props.changeRipple} />
        )
      }
    }

    render() {
      const styles = { backgroundColor: this.props.speed.color }
      return (
          <section id="playback-controls" className="playback-controls-div" style={styles}>
            <TempoView tempo={this.props.speed.tempo} />
            <PlayButton playing={this.props.sound.playing} click={() => this.handleClick()} />
            <Ripple rippleState={this.props.speed.ripple}/>
            {this.renderTick()}
          </section>
      )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        soundOn,
        soundOff,
        changeRipple
    }, dispatch);
}

function mapStateToProps({sound, speed}) {
    return {sound, speed};
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybackControls);
