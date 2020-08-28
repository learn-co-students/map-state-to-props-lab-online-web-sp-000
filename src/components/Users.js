import React, { Component } from 'react';
import {connect} from 'react-redux'
class Users extends Component {

  render() {
   let users = this.props.users.map((user, index)  => {
     return <li key={index}> {user.username} </li>
   })
    return (
      <div>
      <h2> {this.props.users.length} Users </h2>
        <ul>
         
          {users}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    users: state.users
    
// copying state into props 
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
