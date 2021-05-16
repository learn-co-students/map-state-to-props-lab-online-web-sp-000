import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  allDemNames = () => {
   return this.props.users.map( u => {return <li key={Math.random() * Math.random() * 33}>{u.username}</li>})  
  }

  howManyz = () => {
    return <h3>{this.props.userCount}</h3>
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          <ul>
          {/* Write code here that displays the usernames of all users in the Redux store */ this.allDemNames()}
          </ul>
          
          {/* In addition, display the total number of users curently in the store */this.howManyz()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
 
  return {
    users: state.users,
    userCount: state.users.length,
  }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
