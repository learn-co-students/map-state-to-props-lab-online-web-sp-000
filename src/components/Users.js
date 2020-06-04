import React, { Component } from 'react';
// add any needed imports here
import { connect } from "react-redux";

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.users.map(user => <li key={user.username}>{user.username}</li>)}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
        <div>Total users: {this.props.users.length}</div>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { users: state.users}
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
