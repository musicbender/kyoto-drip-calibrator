import React, { Component } from 'react';

class PlaybackControls extends Component {
  constructor(props) {
    super(props);

  }

  handleTemp() {
    if (this.props.playing) {
      return "It's playing!";
    } else if (!this.props.playing) {
      return "It's not playing!";
    } else {
      "Uhh..."
    }
  }

  handleClick() {
    if (this.props.playing) {
      this.props.soundOff();
    } else {
      this.props.soundOn();
    }
  }

  render() {
    return (
      <div>
        <div>{ handleTemp() }</div>
        <button onClick={handleClick()}>Click Here</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ soundOn, soundOff }, dispatch);
}

function mapStateToProps({ playing }) {
  return { playing };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaybackControls);
