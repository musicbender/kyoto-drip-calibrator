import React, {Component} from 'react';

class Tick extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.newOscillator();
    this.interval = setInterval(()=>this.newOscillator(), this.convertTempo(this.props.tempo));
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  newOscillator() {
    const ctx = this.props.ctx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const delay = 0.1;

    osc.type = 'sine';
    osc.frequency.value = 2000;
    gain.gain.value = 1;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime + delay);
    osc.stop(ctx.currentTime + (delay + 0.003));
    this.handleRipple();
  }

  handleRipple() {
    this.props.changeRipple();
  }

  convertTempo(num) {
    return 60000 / num;
  }

  render() {
    return <div></div>
  }
}

export default Tick;
