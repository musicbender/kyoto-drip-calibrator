import React, { Component } from 'react';
import {connect} from 'react-redux';
import PlaybackControls from '../containers/playback-controls.jsx';
import TempoSlider from '../containers/tempo-slider.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../style/base.scss';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

class App extends Component {
  render() {

    const muiTheme = getMuiTheme({
      slider: {
        handleSize: 20,
        selectionColor: this.props.sound.color,
        handleColorZero: 'rgb(70, 50, 42)',
        handleFillColor: 'rgb(70, 50, 42)',
        rippleColor: this.props.sound.color
      },
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app-div">
          <PlaybackControls audioContext={ audioContext } />
          <TempoSlider audioContext={ audioContext }/>
        </div>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps({sound}) {
    return {sound};
}

export default connect(mapStateToProps)(App);
