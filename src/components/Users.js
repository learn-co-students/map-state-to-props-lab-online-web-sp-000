import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users! {this.props.users.length}
          { this.props.users.map(user => <li key={user.id}>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateProps = state => {
  return {users: state.users}
}

export default connect(mapStateProps)(Users)
