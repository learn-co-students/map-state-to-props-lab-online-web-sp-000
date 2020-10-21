import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App'

import manageUsers from './reducers/manageUsers'

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
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
