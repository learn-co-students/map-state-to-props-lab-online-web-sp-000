import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        {this.props.userCount} Users!
        <ul>
          {this.props.users.map((user, index) => <li key={index}>{user.username} - {user.hometown}</li>)}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  console.log(state)
  return (
    {
      users: state.users,
      userCount: state.users.length
    }
  )
}

// connect this component to Redux

export default connect(mapStateToProps)(Users);
