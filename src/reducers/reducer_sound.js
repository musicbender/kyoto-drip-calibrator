import { SOUND_ON, SOUND_OFF, CHANGE_TEMPO } from '../constants/index';

const initialState = {
    playing: false,
    interval: null,
    tempo: 40
}

export default function sound(state = initialState, action) {
    switch (action.type) {
        case SOUND_ON:
            function newOscillator() {
                const osc = state.ctx.createOscillator();
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

            newOscillator();

            return {
                ...state,
                playing: true,
                interval: setInterval(newOscillator, convertTempo(state.tempo))
            };
        case SOUND_OFF:
            clearInterval(state.interval);
            return {
                ...state,
                playing: false,
                interval: null
            };
        case CHANGE_TEMPO:
            return { ...state, tempo: action.value };
        default:
            return state;
    }
}
