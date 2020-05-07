import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          <h2>User List</h2>
          <ul>
            {this.props.users.map((user, index ) =>
            <li key={index}>{user.username}</li>
              )}
          </ul>
          <h2>Total User Count: {this.props.users.length}</h2>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.users.length)
  return { 
    users: state.users,
    userCount: state.users.count }
}


export default connect(mapStateToProps)(Users);
