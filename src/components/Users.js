import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  displayUsers = () => {
    return (
      this.props.users.map((user) => <li>{user.username}</li>)
    )
  }

  displayUserCount = () => {
    if(this.props.userCount > 0 ){
      return (
        <p>{this.props.userCount}</p>
      )
    }
  }

  render() {
    console.log("displayUsers:", this.displayUsers())
    return (
      <div>
        <ul>
          Users!
          
            {this.displayUsers()}
          
          {
            this.displayUserCount()
            
            /* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
 function mapStateToProps(state){
    return {
      users: state.users,
      userCount: state.users.length
    }
 }

// connect this component to Redux
export default connect(mapStateToProps)(Users);
