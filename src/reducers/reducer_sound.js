import { SOUND_ON, SOUND_OFF } from '../constants/index';

const initialState = {
    playing: false,
    interval: null,
    tempo: 1500
}

export default function sound(state = initialState, action) {
    switch (action.type) {
        case SOUND_ON:
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

            newOscillator();

            return {
                ...state,
                playing: true,
                interval: setInterval(newOscillator, state.tempo)
            };
        case SOUND_OFF:
            clearInterval(state.interval);
            return {
                ...state,
                playing: false,
                interval: null
            };
        default:
            return state;
    }
}
