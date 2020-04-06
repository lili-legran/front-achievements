/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {
  isAuthorized: false
};

function reducer(state = initialState, action) {
  if (action.type === 'SET_IS_AUTHORIZED') {
    return {
      ...state,
      isAuthorized: action.payload
    };
  }
  return state;
}

const store = createStore(reducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);

serviceWorker.unregister();
