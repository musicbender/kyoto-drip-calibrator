import React, { Component } from 'react';
import {connect} from 'react-redux';
import PlaybackControls from '../containers/playback-controls.jsx';
import TempoSlider from '../containers/tempo-slider.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
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
      }
    });
    const barStyle = {
      title: {
        textAlign: "left",
        fontSize: 18,
        fontWeight: 100,
        color: "rgba(255, 255, 255, 0.6)",
        lineHeight: 45
      },
      bar: {
        backgroundColor: "rgba(70, 50, 42, 0.3)",
        height: 45
      },
      iconLeft: {
        marginTop: 0,
        height: 45,
        width: 45
      }
    }

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app-div">
          <AppBar
            title="Coffee Drip Tower Calibrator"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            titleStyle={barStyle.title}
            style={barStyle.bar}
            iconStyleLeft={barStyle.iconLeft}
            />
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
