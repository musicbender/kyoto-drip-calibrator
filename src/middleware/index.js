const TimerMiddleware = store => next => action => {
  function newOscillator() {
      const osc = action.ctx.createOscillator();
      const gain = action.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.value = 2000;
      gain.gain.value = 1;
      osc.connect(gain);
      gain.connect(action.ctx.destination);
      osc.start();
      osc.stop(action.ctx.currentTime + 0.15);
  };

  function convertTempo(num) {
      return 60000 / num;
  }


  if (action.type === 'SOUND_ON') {
      action.interval = setInterval(() => {
        console.log('playing');
        store.dispatch({ type: 'TICK', currentTime: Date.now() });
      }, 1000);

  } else if (action.type === 'SOUND_OFF') {
    console.log('STOPPED');
    clearInterval(action.interval);
    action.interval = null;
  }
  next(action);
};

export default TimerMiddleware;

// convertTempo(store.tempo)


//action.interval = setInterval(() => console.log('playing'), 1000);
