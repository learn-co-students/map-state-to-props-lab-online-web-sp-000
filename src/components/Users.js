import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map( user => {return <li>{user.username}</li>})}
          {this.props.users.length}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
 


}

const mapStateToProps = (state) => {
  return {users: state.users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
