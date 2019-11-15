import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    const users = this.props.users.map((user, idx) => {
      return <li key={idx}>{user.username}</li>
    })

    return (
      <div>
        Users:
        <ul>
          {users}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
        # of Users:
        {this.props.numberOfUsers}
      </div >
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
export default connect(mapStateToProps)(Users)
