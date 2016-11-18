import { SOUND_ON, SOUND_OFF, CHANGE_TEMPO } from '../constants/index';

export function soundOn() {
  return {
    type: SOUND_ON
  }
}

export function soundOff() {
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
