import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {createStore} from 'redux';
import {Provider} from 'react-redux'

import manageUsers from './reducers/manageUsers'

const store = createStore(manageUsers, window.__REDUX_DEV_TOOLS__ && window.__REDUX_DEV_TOOLS__())


// add imports and code


ReactDOM.render(
  // add imports and code
  <Provider store={store}>
    <App />
  </Provider>
  // add imports and code
  ,
  document.getElementById('root')
);
