import React, { Component } from 'react';
import { connect } from 'react-redux'
import UserInput from './components/UserInput'
import Users from './components/Users'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <Users />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToProps)(App);
