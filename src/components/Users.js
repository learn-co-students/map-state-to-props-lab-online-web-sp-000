import React, { Component } from 'react';
import {connect} from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!<br/>
          {this.displayUserNames()}<br/>
          {`Current number of users: ${this.props.userCount}`}
        </ul>
      </div>
    )
  }
  displayUserNames = () => {
    if (this.props.users.length > 0) {
      let usernames = this.props.users.map(user => <li>{user.username}</li>);
      return usernames;
    } else {
      return '';
    }
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  };
}
// connect this component to Redux
export default connect(mapStateToProps)(Users);
