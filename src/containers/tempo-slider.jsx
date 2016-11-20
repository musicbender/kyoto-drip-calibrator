import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {soundOn, soundOff, changeTempo} from '../actions/index';
import Slider from 'material-ui/Slider';
import FontIcon from 'material-ui/FontIcon';
import '../style/tempo-slider.scss';

const config = {
  min: 10,
  max: 120,
  step: 1,
  defaultValue: 40
}

class TempoSlider extends Component {
  render() {
    return (
      <section className="tempo-slider-section">
        <div className="tempo-slider-div">
          <FontIcon className="material-icons minus">remove</FontIcon>
          <Slider {...config} className="tempo-slider"/>
          <FontIcon className="material-icons plus">add</FontIcon>
        </div>
      </section>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        soundOn,
        soundOff,
        changeTempo
    }, dispatch);
}

function mapStateToProps({sound}) {
    return {sound};
}

export default connect(mapStateToProps, mapDispatchToProps)(TempoSlider);
