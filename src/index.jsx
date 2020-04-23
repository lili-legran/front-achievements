/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import Loading from './components/loading/loading';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
// import loadingImg from './assets/download.png';

const initialState = {
  isAuthorized: false,
  achievements: {},
  isLoading: false,
  isActiveAchievement: false
};

function reducer(state = initialState, action) {
  if (action.type === 'SET_IS_AUTHORIZED') {
    return {
      ...state,
      isAuthorized: action.payload
    };
  }
  if (action.type === 'SET_ACHIEVEMENTS') {
    return {
      ...state,
      achievements: action.payload
    };
  }
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.payload
    };
  }
  if (action.type === 'SET_ACTIVE_ACHIEVEMENTS') {
    return {
      ...state,
      isActiveAchievement: action.payload
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
