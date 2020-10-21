import React, { Component } from 'react';
import  { connect } from 'react-redux';

import manageUsers from '../reducers/manageUsers'

// add any needed imports here
class Users extends Component {

  render() {

    let users = this.props.users.map((user, index) => <li ky={index}>{user.username}</li>)
    return (
      <div>
          {this.props.mumberOfUsers}
          <ul>
          {users}   
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

// connect this component to Redux
 
export default connect(manageUsers)(Users);
