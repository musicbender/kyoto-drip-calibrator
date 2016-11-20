import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {soundOn, soundOff, changeTempo} from '../actions/index';
import Slider from 'material-ui/Slider';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
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
      <div className="tempo-slider-div">
        <ContentRemove />
        <Slider {...config}/>
        <ContentAdd />
      </div>
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
