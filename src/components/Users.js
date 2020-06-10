import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    let users = this.props.users.map((user,index) => {
      return (
      <li key={index}>{user.username}</li>
      )
    })
    return (
      <div>
        { this.props.numberOfUsers }
        <ul>
          Users!
          { users }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    users : state.users, 
    numberOfUsers: state.users.length
   }
}

//add mapStateToProps here

// connect this component to Redux
export default connect(mapStateToProps)(Users)
