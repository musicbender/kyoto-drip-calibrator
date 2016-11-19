import React, { Component } from 'react';
import PlaybackControls from '../containers/playback-controls.jsx';
import Slider from '../containers/slider.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../style/base.scss';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app-div">
          <PlaybackControls audioContext={ audioContext } />
          {/*}<Slider />*/}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
