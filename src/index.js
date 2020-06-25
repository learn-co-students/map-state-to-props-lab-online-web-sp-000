import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App'

import manageUsers from './reducers/manageUsers'


// add imports and code
const state = createStore(
  manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider state={state}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
