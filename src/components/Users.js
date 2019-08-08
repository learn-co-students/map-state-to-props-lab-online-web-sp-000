import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <p>
          Users: {this.props.users}
        </p>
        <p>
          User Count: {this.props.userCount}
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let userArray = state.users.map(user => <li>{user.username}</li>)
  return {
    users: userArray,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users);
