import React, { Component } from 'react';
import PlaybackControls from '../containers/playerback-controls.jsx';
import Slider from '../containers/slider.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

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
