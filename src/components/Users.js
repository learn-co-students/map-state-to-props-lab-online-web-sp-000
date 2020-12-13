import React, { Component } from 'react';
import { connect } from 'react-redux';

// add any needed imports here
class Users extends Component {

  render() {
    let usernames=this.props.users.map((val, key) => <li key={key}>{val.username}</li>);
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {usernames}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.usersLength}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // debugger;
  return { users: state.users, usersLength: state.users.length }
}

export default connect(mapStateToProps)(Users);
// export default connect()(Users);

// connect this component to Redux
//export default Users
