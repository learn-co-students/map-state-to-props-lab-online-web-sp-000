import React, { Component } from 'react';
import UserImput from './UserInput.js'
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    return (
      <div>
        <h2>{this.props.numberOfUsers}</h2>
        <ul>
         {users}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state => {
  return{
    users: state.users,
    numberOfUsers: state.users.length
  }
})
// connect this component to Redux
export default connect(mapStateToProps)(Users)
