import React, { Component } from 'react';
import { connect } from 'react-redux'

// add any needed imports here
class Users extends Component {
  render() {
    let users = this.props.users.map(m => (<li>{m.username}</li>))
    debugger;
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          {users}
        </ul>
        {this.props.numOfUsers}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStatetoUsers = state => {
  return {
    users: state.users,
    numOfUsers: state.users.length
  };
};

// connect this component to Redux
export default connect(mapStatetoUsers)(Users)
