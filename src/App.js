import React, { Component } from 'react';
import UserInput from './components/UserInput'
import ConnectedUsers from './components/Users'
import { connect } from 'react-redux'; 

class App extends Component {
  render() {
    console.log(this.props);
    
    return (
      <div className="App">
        <UserInput />
        <ConnectedUsers />
      </div>
    );
  }
}

const mstp=(state)=>{
  return{
    users:state.users
  }
}


export default connect(mstp)(App);
