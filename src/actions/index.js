import { SOUND_ON, SOUND_OFF, CHANGE_TEMPO, CHANGE_RIPPLE, RANGE_ON, RANGE_OFF } from '../constants/index';

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
    value
  }
}

export function changeRipple() {
  return {
    type: CHANGE_RIPPLE
  }
}

export function onRange() {
  return {
    type: RANGE_ON
  }
}

export function offRange() {
  return {
    type: RANGE_OFF
  }
}
