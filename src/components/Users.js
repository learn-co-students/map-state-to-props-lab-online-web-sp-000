import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, idx) => {
            return(
              <li key={idx}>{user}</li>
            )
          })}
          <p>Current number of users: {this.props.userCount}</p>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let users = []
  state.users.forEach(user => users.push(user.username))
  return {
    users,
    userCount: users.length
  }
}

export default connect(mapStateToProps)(Users);
