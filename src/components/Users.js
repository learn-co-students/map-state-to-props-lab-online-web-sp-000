import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.userCount} Users!</h1>
        <ul>
          {this.props.users.map(user =>
            <li>{user.username}</li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
   }
}

export default connect(mapStateToProps)(Users)
