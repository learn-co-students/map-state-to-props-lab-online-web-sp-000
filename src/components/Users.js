import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          <h2>Users:</h2>
          {this.props.users.map((user, idx) => {
            return <li key={idx}>{user.username} - {user.hometown}</li>
          })}
          <div><h3>User Count: {this.props.userCount}</h3></div>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length };
};


export default connect(mapStateToProps)(Users)
