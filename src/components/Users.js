import { connect } from 'react-redux'
import React, { Component } from 'react';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {
            this.props.users.map(({ username }) => <li key={username}>{username}</li>)
          }
          {/* In addition, display the total number of users curently in the store */}
        <p>Total number of users: {this.props.userCount}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
