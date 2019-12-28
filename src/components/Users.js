import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user, i) => {
            return <li key={i}>{user.username}</li>
          })}
        </ul>
        <p>{this.props.userCount} Total Users</p>
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

// connect this component to Redux
export default connect(mapStateToProps)(Users);
