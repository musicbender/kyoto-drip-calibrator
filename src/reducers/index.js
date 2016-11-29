import { combineReducers } from 'redux';
import sound from './reducer_sound';
import speed from './reducer_speed';

const rootReducer = combineReducers({
  sound,
  speed
});

export default rootReducer;
