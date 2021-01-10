import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map((user, i) => <li key={i}>{user.username}</li>);
    return (
      <div>
        {this.props.totalUsers}
        <ul>
          Users!
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  debugger;
  return {
    users: state.users,
    totalUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users);
