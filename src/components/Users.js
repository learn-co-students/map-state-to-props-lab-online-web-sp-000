import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.users.map(user => (<li>{user.username}</li>))}
        </ul>
        <h2>{this.props.users.length}</h2>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { users: state.users };
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
