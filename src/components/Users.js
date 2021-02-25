import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';
class Users extends Component {
  render() {
    const userItems = this.props.users.map(user => {
      return <li>{user.username}-{user.hometown}</li>
    });
    return (
      <div>
        <ul>
          Users!
          {userItems}
          <p>Current Users: {this.props.userCount}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps =  (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
