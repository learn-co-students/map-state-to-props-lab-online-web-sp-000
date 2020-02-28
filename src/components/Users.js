import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {

    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, i) => {
            return <li key={i}>{user.username}</li>
          })}
        </ul>
        <div>{`Total Users: ${this.props.users.length}`}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Users);