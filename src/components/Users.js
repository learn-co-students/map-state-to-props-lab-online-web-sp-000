import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    let usersList = this.props.users.map((user, index) => {
      return <li key={index}>{user.username}</li>
    })
    return (
      <div>
        <ul>
          {usersList}
        </ul>
        <p>There are {usersList.length} users.</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return (
    { 
      users: state.users,
      userCount: state.users.length
    }
  )
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)