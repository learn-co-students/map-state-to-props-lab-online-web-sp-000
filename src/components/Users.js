import React, { Component } from 'react';
import { connect } from 'react-redux'
import manageUsers from '../reducers/manageUsers';

class Users extends Component {

  render() {

    let arrayOfUsers = this.props.users.map((user) => {
     return user.username
    })

    let getUsersNames = arrayOfUsers.map((i) => {
      return <li>{i}</li>  
    })

    return (
      <div>
        <ul>
          Users!
          {getUsersNames}
          {getUsersNames.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users : state.users}
}


// connect this component to Redux
export default connect(mapStateToProps)(Users)
