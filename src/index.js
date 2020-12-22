import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App'

import manageUsers from './reducers/manageUsers'

let store = createStore(manageUsers);

ReactDOM.render(
  <Provider stare={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
