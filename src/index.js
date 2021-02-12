import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageUsers from './reducers/manageUsers'


// add imports and code

let storello = createStore(manageUsers )


ReactDOM.render(
  // add imports and code
  <Provider store={storello}>
  <App />
  </Provider>
  // add imports and code
  ,
  document.getElementById('root')
);
