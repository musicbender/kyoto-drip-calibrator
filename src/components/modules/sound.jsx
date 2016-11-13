import React from 'react';
import StartButton from './start-button.jsx';

var Sound = React.createClass({
    
    getInitialState: function () {
        return {
            buttonShow: 'play',
            oscillator: null
        }
    },
    
    getDefaultProps: function () {
        return {
            audioContext: null,
            playing: false,
            dripRate: 45
        }
    },
    
    handleButtonState: function (on) {
        if (on) {
            this.setState({ buttonShow: 'pause'});
        } else {
            this.setState({ buttonShow: 'play' });
        }
        
    },
    
    mountOscillator: function () {
        this.setState({
            oscillator: this.props.audioContext.createOscillator()
        })
    },
    
    start: function () {
        this.mountOscillator();
        this.handleButtonState(true);
        
        var ctx = this.props.audioContext,
            osc = this.state.oscillator;
        
        console.log('DEBUG: ' + this.state.oscillator);
        console.log('DEBUG: ' + this.props.playing);
        
        osc.type = 'sine';
        osc.frequency.value = 1080;
        var gain = ctx.createGain();
        gain.gain.value = 1;
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        this.props.changePlaying(true);
    },
    
    stop: function () {
        this.handleButtonState(false);
        
        var osc = this.state.oscillator;
        
        osc.stop();
        osc.disconnect();
        this.props.changePlaying(false);
    },
    
    beep: function () {
        var playing = this.props.playing;
        
        if (playing) {
            this.stop();
            console.log('DEBUG2: ' + this.state.oscillator);
        } else {
            this.start();
            console.log('DEBUG2: ' + this.state.oscillator);
        }
        
    },
    
    render: function () {
        return (
            <StartButton className="start-btn-container" onClick={this.beep} />
        )
    }
})

export default Sound;