import React, {Component} from 'react';

class Tick extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    this.interval = setInterval(()=>this.newOscillator(), this.convertTempo(this.props.tempo));
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  newOscillator() {
    const ctx = this.props.ctx;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.value = 2000;
      gain.gain.value = 1;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
  };

  convertTempo(num) {
      return 60000 / num;
  }

  render() {
    return <div></div>

  }
}

export default Tick;
