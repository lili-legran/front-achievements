import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

// import { createStore } from 'redux';

// function achievement(state = []) {
//   return state;
// }

// const store = createStore(achievement);

// store.subscribe(() => {
//   console.log('subscribe', store.getState());
// });

// store.dispatch({ type: 'ADD_ACHIEVEMENT', language: 'JavaScript' });
