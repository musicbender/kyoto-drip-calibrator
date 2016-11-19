import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {soundOn, soundOff} from '../actions/index';

class PlaybackControls extends Component {

    showText(n) {
        const {sound} = this.props;

        if (sound.playing) {
            return "It's playing!";
        } else if (!sound.playing) {
            return "It's not playing!";
        } else {
            "Uhh..."
        }
    }

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
        return (
            <div>
                <div>{this.showText()}</div>
                <button onClick={() => this.handleClick()}>Click Here</button>
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
