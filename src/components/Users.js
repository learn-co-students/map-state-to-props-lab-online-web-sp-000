import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          <h1>Users!</h1>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.users.map((user, index) =>
            <li key={index}>{user.username}</li>
          )}

          {/* In addition, display the total number of users curently in the store */}
          <h2>Number of Users: {this.props.userCount}</h2>
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
