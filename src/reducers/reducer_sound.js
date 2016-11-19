import { SOUND_ON, SOUND_OFF } from '../constants/index';

const initialState = {
    playing: false,
    osc: null
}

export default function sound(state = initialState, action) {
    switch (action.type) {
        case SOUND_ON:
            const osc = action.ctx.createOscillator();
            const gain = action.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.value = 2000;
            gain.gain.value = 1;
            osc.connect(gain);
            gain.connect(action.ctx.destination);
            osc.start();
            return {...state, playing: true, osc};
        case SOUND_OFF:
            var osc = state.osc;

            osc.stop();
            osc.disconnect();
            return {...state, playing: false, osc: null};
        default:
            return state;
    }
}
