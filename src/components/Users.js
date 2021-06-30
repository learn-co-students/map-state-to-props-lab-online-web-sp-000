import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.users.map((user, index) => {
            return (
              <React.Fragment>
              <li key={index}>{user.username}</li>
              <h1>Total Users: {this.props.users.length}</h1>
              </React.Fragment>
            )
          })}
          {/* In addition, display the total number of users curently in the store */}
          
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);

