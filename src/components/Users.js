import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <h3>Number of Users: {this.props.userCount}</h3>
        <ul>
          {this.props.users.map((user, index) => <li key={index}>{user.username}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { users: state.users,
          userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
