import React, { Component } from 'react';
import {connect} from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    let listOfUsers = this.props.users.map((user, i) => <li key={i}>{user.username}</li> )
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
            {listOfUsers}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
        {this.props.numberOfUsers}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
