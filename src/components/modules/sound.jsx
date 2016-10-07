import React from 'react';
import StartButton from './start-button.jsx';

var Sound = React.createClass({
    
    getInitialState: function () {
        return {
            buttonShow: 'play',
            oscillator: null
        }
    },
    
    start: function () {
        this.setState({
            buttonShow: 'pause',
            oscillator: this.props.audioContext.createOscillator()
        })
    
        var ctx = this.props.audioContext,
            osc = this.state.oscillator;
        
        osc.type = 'sine';
        osc.frequency.value = 1080;
        gain = ctx.createGain();
        gain.gain.value = 1;
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        this.props.playing = true;
    },
    
    stop: function () {
        var osc = this.state.oscillator;
        
        osc.stop();
        osc.disconnect();
        this.props.playing = false;
    },
    
    handleStartStop: function () {
        var playing = this.props.playing;
        
        if (playing) {
            this.stop();
        } else {
            this.start();
        }
        
    },
    
    render: function () {
        return (
            <StartButton className="start-btn-container" onClick={this.handleStartStop} />
        )
    }
})

export default Sound;