import React, { Component } from 'react';

class PlaybackControls extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (

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
