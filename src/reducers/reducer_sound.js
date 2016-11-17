import { SOUND_ON, SOUND_OFF } from '../constants/index';

const initialState = {
    playing: false
}

export default function sound(state = initialState, action) {
  switch (action.type) {
    case SOUND_ON:
      return { playing: true, ...state };
      console.log("REDUCER: ON");
    case SOUND_OFF:
      return { playing: false, ...state };
      console.log("REDUCER: OFF");
    default:
      return state
  }
}
