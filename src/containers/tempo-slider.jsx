import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {soundOn, soundOff, changeTempo} from '../actions/index';
import Slider from 'material-ui/Slider';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import '../style/tempo-slider.scss';

const config = {
  min: 10,
  max: 120,
  step: 1,
  defaultValue: 40
}

class TempoSlider extends Component {
  constructor(props) {
    super(props);

    this.handleSlider = this.handleSlider.bind(this);
    this.handleIcon = this.handleIcon.bind(this);
  }
  stopSound() {
    const {sound, soundOff, audioContext} = this.props;
    if(sound.playing) {
      soundOff(audioContext);
    }
  }

  handleSlider(e, value) {
    const {changeTempo} = this.props;
    changeTempo(value);
  }

  handleIcon() {
    const {changeTempo, sound} = this.props;

    console.log(sound);


  }

  render() {
    return (
      <section className="tempo-slider-section">
        <div className="tempo-slider-div">
          <IconButton className="minus" onClick={this.handleIcon}>
            <FontIcon className="material-icons">remove</FontIcon>
          </IconButton>
          <Slider
            {...config}
            onDragStart={() => this.stopSound()}
            value={this.props.sound.tempo}
            onChange={this.handleSlider}
            className="tempo-slider"/>
          <IconButton className="plus" onClick={this.handleIcon}>
            <FontIcon className="material-icons">add</FontIcon>
          </IconButton>
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
