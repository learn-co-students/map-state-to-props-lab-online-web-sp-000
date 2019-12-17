import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  

  render() {
    // debugger
    let showusers = this.props.users.map((user, index) => 
      <li key={index}>{user.username} - {user.hometown}</li>
    )
        

  
    return (
      <div>
        Total # of users: {this.props.userTotals}
        <ul>
          Users!
         {showusers}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) =>{
  return {users: state.users, userTotals: state.users.length}
  
  
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
