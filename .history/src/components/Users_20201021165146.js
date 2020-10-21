import React, { Component } from 'react';
import  { connect } from 'react-redux';

import manageUsers from '../reducers/manageUsers'

// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
              {state.users.map(user
        <ul>
<li>user.name</li>
              )}
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
