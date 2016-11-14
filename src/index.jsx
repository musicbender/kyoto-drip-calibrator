import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReactPromise from 'react-promise';
import soundsMiddleware from 'redux-sounds';
import App from './components/App.jsx';
import recuers from './reducers';

const soundsData = { tickSound: './audio/tick.mp3' }
const loadedSoundsMiddleware = soundsMiddleware(soundsData);
const middleware = [ReduxPromise, loadedSoundsMiddleware];
const createStoreWithMiddleWare = applyMiddleware(...middleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('app')
);
