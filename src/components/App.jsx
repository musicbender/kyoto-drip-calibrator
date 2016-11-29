import React, { Component } from 'react';
import {connect} from 'react-redux';
import PlaybackControls from '../containers/playback-controls.jsx';
import TempoSlider from '../containers/tempo-slider.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import DropdownMenu from './dropdown-menu.jsx';
import barStyle from '../style/bar-style';
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
