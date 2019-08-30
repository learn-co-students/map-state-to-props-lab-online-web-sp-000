import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    const userList = this.props.users.map((user, i) => {
      return <li key={i}>{user.username}</li>
    })
    return (
      <div>
        <ul>
          Users!
          {userList}
        </ul>
        {this.props.users.length}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {users: state.users}
}

export default connect(mapStateToProps)(Users);
