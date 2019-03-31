import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)

    return (
      <div>
        <ul>
          {users}
        </ul>
        <p>Total Users: {this.props.totalUsers}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    totalUsers: state.users.length
  }
}

export default connect(mapStateToProps) (Users)
