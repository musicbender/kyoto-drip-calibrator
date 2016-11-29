import React, { Component } from 'react';
import {connect} from 'react-redux';
import PlaybackControls from '../containers/playback-controls.jsx';
import TempoSlider from '../containers/tempo-slider.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import DropdownMenu from './dropdown-menu.jsx';
import '../style/base.scss';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

class App extends Component {
  render() {
    const muiTheme = getMuiTheme({
      slider: {
        handleSize: 20,
        selectionColor: this.props.speed.color,
        handleColorZero: 'rgb(70, 50, 42)',
        handleFillColor: 'rgb(70, 50, 42)',
        rippleColor: this.props.speed.color
      }
    });
    const barStyle = {
      title: {
        textAlign: "left",
        fontSize: 18,
        fontWeight: 100,
        color: "rgba(255, 255, 255, 0.6)",
        lineHeight: '45px'
      },
      bar: {
        backgroundColor: "rgba(70, 50, 42, 0.3)",
        height: 45
      },
      iconLeft: {
        marginTop: 0,
        height: 45,
        width: 45,
        display: "none"
      },
      iconRight: {
        marginTop: 0
      }
    }

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app-div">
          <AppBar
            title="Slow Drip Coffee Calibrator"
            titleStyle={barStyle.title}
            style={barStyle.bar}
            iconStyleLeft={barStyle.iconLeft}
            iconStyleRight={barStyle.iconRight}
            iconElementRight={<DropdownMenu />}
            />
          <PlaybackControls audioContext={ audioContext } />
          <TempoSlider audioContext={ audioContext } />
        </div>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps({speed}) {
    return {speed};
}

export default connect(mapStateToProps)(App);
