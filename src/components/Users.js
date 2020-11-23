import React, { Component } from 'react';
import { connect } from 'react-redux';

// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
          { this.props.users.map((user, index) => {
          return <li key={index}>{ user.username }</li>
          })}
        </ul>
        <div>total users: {this.props.users.length}</div>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { 
    users: state.users
  }
}

export default connect(mapStateToProps)(Users);