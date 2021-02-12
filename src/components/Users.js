import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>

        {this.props.users.length}
        <ul>

          { this.props.users.map(user => <li> {user.username} </li>) }
          
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
let mapStateToProps = (state) => {
  return {users: state.users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
// export default Users
