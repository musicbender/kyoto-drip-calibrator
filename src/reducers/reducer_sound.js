import { SOUND_ON, SOUND_OFF } from '../constants/index';

const initialState = {
    playing: false
}

export default function sounds(state = initialState, actions) {
  switch (actions.type) {
    case SOUND_ON:
      return { playing: true, ...state };
    case SOUND_OFF:
      return { playing: false, ...state };
    default:
      return state
  }
}
