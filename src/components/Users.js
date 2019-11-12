import React, { Component } from 'react';
// add any needed imports here
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    console.log(this.props.users)
    let usersNumber = this.props.numberOfUsers
    let usernamesArray = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    return (
      <div>
        {usersNumber}
        <ul>
          Users!
          {usernamesArray}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    numberOfUsers: state.users.length
  };
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
