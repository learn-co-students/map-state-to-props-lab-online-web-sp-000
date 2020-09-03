import React, { Component } from 'react';
import UserInput from './components/UserInput'
import ConnectedUsers from './components/Users'
import { connect } from 'react-redux';
import './App.css';
 
 
class App extends Component {
 
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_USER', user: this.state})
  }
 
  render() {
    return (
      <div>
        <UserInput />
        <ConnectedUsers />

      </div>
    );
  }
}
 
const mapStateToProps = (state) => {
  // debugger;
  return { users: state.users }
}
 
export default connect(mapStateToProps)(App);
