import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';


import manageUsers from './reducers/manageUsers'


// add imports and code
import { Provider } from 'react-redux'
import App from './App'

const store = createStore(
  manageUsers
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch({type: '@@INIT'})
