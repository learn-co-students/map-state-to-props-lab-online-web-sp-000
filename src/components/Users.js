import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  displayUsers = () => (
    this.props.users.map((user, index) => {
      return <li key={index}>{user.username}</li>
    })
  )

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.displayUsers()}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
