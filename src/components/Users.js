import React, { Component } from 'react';
import {connect} from 'react-redux'


class Users extends Component {

  render() {
    const userNodes = this.props.users.map(user => {
      return <li> {user.username} - {user.hometown} </li>
    })
    return (
      <div>
        <ul>
          Users!
          {userNodes}
          <p> Current Users: {this.props.userCount} </p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length,
  }
}

export default connect(mapStateToProps)(Users);
