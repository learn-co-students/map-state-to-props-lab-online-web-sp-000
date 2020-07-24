import React, { Component } from 'react';
import { connect } from "react-redux";

class Users extends Component {

  displayUsernames() {
    return this.props.users.map(user => {
      console.log(user.username)
      return <li>{user.username}</li>
    });
  }

  displayUserCount() {
    return <div>User Count: {this.props.userCount}</div>
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.displayUsernames()}
          {this.displayUserCount()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return {users: state.users, userCount: Object.keys(state.users).length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
