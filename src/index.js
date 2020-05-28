import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import manageUsers from './reducers/manageUsers'


// add imports and code
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(
  manageUsers,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

ReactDOM.render(

  <Provider store={store}>
    <App />

  </Provider>,
  document.getElementById('root')
);



//In src/index.js, use the createStore from redux, passing in the provided reducer, manageUsers, to create a store.

//Use Provider from react-redux to wrap <App />, passing store as a prop to the Provider. This will give your components access to the store.
