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

  handleIcon(a) {
    const {changeTempo, sound} = this.props;
    const currentTempo = sound.tempo;

    this.stopSound();

    if (a == "up") {
      changeTempo(currentTempo + 1);
    } else {
      changeTempo(currentTempo - 1);
    }

  }

  render() {
    var bgColor = {backgroundColor: this.props.sound.color};
    var iconColor = {color: this.props.sound.color};

    return (
      <section className="tempo-slider-section">
        <div className="tempo-slider-div">
          <IconButton className="minus" onClick={() => this.handleIcon("down")} iconStyle={iconColor}>
            <FontIcon className="material-icons">remove</FontIcon>
          </IconButton>
          <Slider
            {...config}
            onDragStart={() => this.stopSound()}
            value={this.props.sound.tempo}
            onChange={this.handleSlider}
            className="tempo-slider"/>
          <IconButton className="plus" ref="plus" onClick={() => this.handleIcon("up")} iconStyle={iconColor}>
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
