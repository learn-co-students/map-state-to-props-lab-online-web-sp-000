import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';
class Users extends Component {

  render() {
  {/* Write code here that displays the usernames of all users in the Redux store */}
  let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    return (
      <div>
      {/* In addition, display the total number of users curently in the store */}
        <p>{this.props.numberOfUsers}</p>
        <ul>
          Users!
          
          
          {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
//Try to use mapStateToProps to solve both, returning two keys, one for users and one for the userCount
const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users);

// connect this component to Redux
// export default Users
