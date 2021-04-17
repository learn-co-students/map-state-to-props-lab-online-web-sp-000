import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {<ul>{this.props.users.map(user => <li key={user.username}>username: {user.username} hometown: {user.hometown}</li>)}</ul>}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger;
  return { users: state.users, userCount: state.users.length }
}
 
export default connect(mapStateToProps)(Users);
