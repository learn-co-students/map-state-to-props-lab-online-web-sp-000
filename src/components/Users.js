import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    
    let users = this.props.users.map((user, index) =>
      <li key={index}>{user.username}</li>);
    
    return (
      <div>
        {this.props.userCount}
        <ul>
          {users}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users)
