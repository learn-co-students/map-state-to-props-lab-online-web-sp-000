import React, { Component } from 'react';
import  { connect } from 'react-redux';

// add any needed imports here
class Users extends Component {

  render() {

    let users = this.props.users.map((user, index) => <li ky={index}>{user.username}</li>)
    return (
      <div>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.mumberOfUsers}
          <ul>
          {/* In addition, display the total number of users curently in the store */}
          {users}   
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}
// connect this component to Redux
 
export default connect(mapStateToProps)(Users);
