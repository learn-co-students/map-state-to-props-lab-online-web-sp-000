import React, { Component } from "react";
import { connect } from "react-redux";

class Users extends Component {
  displayUsers = () => {
    console.log(this.props.users);
    return this.props.users.map(user => {
      return <li>{user.username}</li>;
    });
  };

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.displayUsers()}
          {this.props.userCount}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users,
    userCount: state.users.length
  };
};
//add mapStateToProps here

// connect this component to Redux
export default connect(mapStateToProps)(Users);
