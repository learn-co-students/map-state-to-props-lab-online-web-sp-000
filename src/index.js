import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import manageUsers from './reducers/manageUsers'


// add imports and code
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(
  manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  // add imports and code
  // our components have access to the redux store as 'store' via below code
  <Provider store={store}>
    <App />
  </Provider>
  // add imports and code
  ,
  document.getElementById('root')
);
