import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user =>
            <li key={user.username}>{user.username} - {user.hometown}</li>
          )}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users);
// export default Users
