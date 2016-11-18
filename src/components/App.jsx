import React, { Component } from 'react';
import PlaybackControls from '../containers/playback-controls.jsx';
import Slider from '../containers/slider.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <PlaybackControls />
          {/*}<Slider />*/}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
