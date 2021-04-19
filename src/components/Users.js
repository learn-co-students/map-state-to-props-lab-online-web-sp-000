import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    let users = this.props.users.map((user) => <li>{user.username}</li>);
    return (
      <div>
        <ul>
          Users!
          <p>{this.props.number}</p>
          <p>{users}</p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users, number: state.users.length}
}

export default connect(mapStateToProps)(Users)
