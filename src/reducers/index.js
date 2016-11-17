import { combineReducers } from 'redux';
import sound from './reducer_sound';

const rootReducer = combineReducers({
  sound: sound
});

export default rootReducer;
