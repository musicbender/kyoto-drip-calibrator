import React from 'react';
import Sound from './modules/sound.jsx';

var App = React.createClass({
    getInitialState: function () {
        return {
            audioContext: null,
            playing: false,
            dripRate: 45
        }
    },
    
    componentDidMount: function () {
        var ctx = new (window.AudioContext || window.webkitAudioContext)();
        
        this.handleAudioContextUpdate(ctx);
    },
    
    handleAudioContextUpdate: function (ctx) {
        this.setState({
            audioContext: ctx
        });
    },
    
    render: function () {
        return (
            <Sound audioContext={this.audioContext} dripRate={this.state.dripRate} playing={this.state.playing} />
        )
    }
});

export default App;