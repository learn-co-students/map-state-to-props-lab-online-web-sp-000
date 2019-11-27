import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    const userDisplay = this.props.users.map(user => <li>{user.username}</li>)
    return (
      <div>
        <ul>
          {this.props.usersLength} Users!
          {userDisplay}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    users: state.users,
    usersLength: state.users.length
  }
}
 
export default connect(mapStateToProps)(Users);
