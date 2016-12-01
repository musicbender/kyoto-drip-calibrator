import { SOUND_ON, SOUND_OFF, CHANGE_TEMPO, CHANGE_RIPPLE, RANGE_ON, RANGE_OFF } from '../constants/index';

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
