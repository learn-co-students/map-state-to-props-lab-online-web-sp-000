import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { createStore } from 'react-redux';
import { Provider } from 'react-redux';
import manageUsers from './reducers/manageUsers';

const store = createStore(
  manageUsers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const mapStateToProps = (state) => {
  return { users: state.users };
};
 
connect(mapStateToProps)(App);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider> 
  // add imports and code
  ,
  document.getElementById('root')
);
