import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import manageUsers from './reducers/manageUsers'
import { createStore} from 'redux'
import { Provider} from 'react-redux';


// add imports and code

const store = createStore(manageUsers)

ReactDOM.render(
  <Provider store={store}>
  <App />

  </Provider>
  // add imports and code
  ,
  document.getElementById('root')
);
//Notice that we are importing the createStore function from Redux. 
//Now, with the above set up, we could pass store down through App and we would be able to access the Redux store.

//However, reducing the need for passing props is part of why Redux works well with React. \
//To avoid passing store as a prop, we use the Provider component, which is imported from react-redux.
// The Provider component wraps the top level component, App, in this case, and is the only component where store is passed in:

//In src/index.js, used the createStore method from redux, 
//passing in the provided reducer, manageUsers, to created a store.
// Use Provider from react-redux to wrap <App />, passing store as a prop to the Provider. 
//This will give your components access to the store.