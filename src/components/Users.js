import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {
 usersList = ()=>{
   
    let keyCounter = 0
    return this.props.users.map((user)=>{
      return (<li key={keyCounter += 1}>{user.username}</li>)
    })  
 }



  render() {
    return (
      <div>
        <ul>
          Users!
          {this.usersList()}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

// connect this component to Redux
//  export default Users
const mapStateToProps = (state) => {
 

  return  {
    users: state.users
  }

  
}

export default connect(mapStateToProps)(Users);


