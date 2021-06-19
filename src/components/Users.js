import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    const users = this.props.users.map((user, key) => <li key={key}>{user.username}</li>)

    return (
      <div>
        <ul>
          Users!
          {users}
          <br></br>
          {`Total number of Users: ${this.props.userCount}`}
          <br></br>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) =>{
  return {
    users: state.users,
    userCount: state.users.length
  } 
}

// connect this component to Redux

export default connect(mapStateToProps)(Users)
