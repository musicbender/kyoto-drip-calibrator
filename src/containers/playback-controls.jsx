import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {soundOn, soundOff} from '../actions/index';
import TempoView from '../components/tempo-view.jsx';
import PlayButton from '../components/play-button.jsx';
import '../style/playback-controls.scss';

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

    convertTempo() {
        return 60000 / this.props.sound.tempo;
    }

    render() {
        return (
            <div className="playback-controls-div">
                <TempoView tempo={this.convertTempo()}/>
                <PlayButton playing={this.props.sound.playing} click={() => this.handleClick()} />
            </div>
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
