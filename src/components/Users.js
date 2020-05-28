import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';
class Users extends Component {

//{/* Write code here that displays the usernames of all users in the Redux store */}
  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li>{user.username}</li>)}

          {this.props.userCount}
        </ul>
      </div>
    )
  }
}
//{/* In addition, display the total number of users curently in the store */}


//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
//debugger;
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
