import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App'

import manageUsers from './reducers/manageUsers'
import { createStore } from 'redux'


const store = createStore(manageUsers);

ReactDOM.render(
  <Provider store={store} >
    <App /> 
  </Provider>,
  document.getElementById('root')
);
