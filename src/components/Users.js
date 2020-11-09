import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  test = () => {
    debugger
  }

  render() {
    return (
      <div>
        <ul>
          
          {this.props.users.length}
          {this.props.users.map(function(user, index) {
            return <li key={index}>{user.username}</li>
          })}
          {this.test()}
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}
 
export default connect(mapStateToProps)(Users);
//export default Users
