import React, { Component } from 'react';
import UserInput from './components/UserInput'
import ConnectedUsers from './components/Users'
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <ConnectedUsers />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.items }
}

export default connect(mapStateToProps)(App);
