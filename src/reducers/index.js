import { combineReducers } from 'redux';
import sound from './reducer_sound';
import speed from './reducer_speed';
import range from './reducer_range';

const rootReducer = combineReducers({
  sound,
  speed,
  range
});

export default rootReducer;
