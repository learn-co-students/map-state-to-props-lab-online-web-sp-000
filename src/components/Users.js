import React, { Component } from 'react';
import {connect} from 'react-redux'
class Users extends Component {

  render() {
    let users = console.log(this.props.users)
    return (
      <div>
        <ul>
          Users!
          {this.props.userCount}
          {this.props.users.map((user, index) => 
            <li key={index + 1}>{user.username}</li>
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users, 
    userCount: state.users.length
  };
};

export default connect(mapStateToProps)(Users);
