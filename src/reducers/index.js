import { combineReducers } from 'redux';
import Sound from './reducer_sound';

const rootReducer = combineReducers({
  sound: Sound
});

export default rootReducer;
