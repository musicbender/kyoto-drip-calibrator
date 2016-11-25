import { SOUND_ON, SOUND_OFF, CHANGE_TEMPO, TICK } from '../constants/index';

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

export function tickOn() {
  return {
    type: TICK,
    currentTime: 0
  }
}

export function changeTempo(value) {
  return {
    type: CHANGE_TEMPO,
    value
  }
}
