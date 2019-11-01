import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li key={Math.random()}>{user}</li>)}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
function mapStateToProps(state) {
  let users = state.users.map((value, key) => value.username)
  let userCount = users.length
  return {users: users, userCount: userCount}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
