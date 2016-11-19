import { SOUND_ON, SOUND_OFF, CHANGE_TEMPO } from '../constants/index';

export function soundOn(ctx) {
  return {
    type: SOUND_ON,
    ctx
  }
}

export function soundOff(ctx) {
  return {
    type: SOUND_OFF,
    ctx
  }
}

export function changeTempo(value) {
  return {
    type: CHANGE_TEMPO,
    value: value
  }
}
