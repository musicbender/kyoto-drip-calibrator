import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import TimerMiddleware from './middleware/index';
import App from './components/App.jsx';
import reducers from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(TimerMiddleware)(createStore);

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <App />
  </Provider>
  , document.getElementById('app')
);
