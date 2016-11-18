import { SOUND_ON, SOUND_OFF } from '../constants/index';

const initialState = {
    playing: false
}

export default function sound(state = initialState, action) {
    switch (action.type) {
        case SOUND_ON:
            return {...state, playing: true};
        case SOUND_OFF:
            return {...state, playing: false};
        default:
            return state;
    }
}
