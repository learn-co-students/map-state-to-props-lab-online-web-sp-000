import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => (
      <li key={index}>{user.username} is from {user.hometown}</li>)
    )
    return (
      <div>
       <h1>Users: {this.props.users.length}</h1>
        <ul>
          { users }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
    return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
