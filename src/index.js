import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {createStore} from 'redux'
import manageUsers from './reducers/manageUsers'
import { Provider } from 'react-redux'



const myStore = createStore(manageUsers)
ReactDOM.render(
  <Provider store = {myStore}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
