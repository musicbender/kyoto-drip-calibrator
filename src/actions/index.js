import { SOUND_ON, SOUND_OFF, CHANGE_TEMPO, CHANGE_RIPPLE } from '../constants/index';

export function soundOn(ctx) {
  return {
    type: SOUND_ON,
    interval: null,
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
    value
  }
}

export function changeRipple() {
  return {
    type: CHANGE_RIPPLE
  }
}
