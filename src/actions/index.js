import { SOUND_ON, SOUND_OFF, CHANGE_TEMPO } from '../constants/index';

export function soundOn() {
  console.log("ACTION: ON");
  return {
    type: SOUND_ON
  }
}

export function soundOff() {
  console.log("ACTION: ON");
  return {
    type: SOUND_OFF
  }
}

export function changeTempo(value) {
  return {
    type: CHANGE_TEMPO,
    value: value
  }
}
