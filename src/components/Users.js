import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {

    let users = this.props.users.map((users, index) => <li key={index}>{users.username} {users.hometown}</li>)
    
    return (
      <div>
    
          {this.props.numberOfUsers}
        <ul>
          Users!
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
   }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
