import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {

    let users = this.props.users.map((user) => <li>{user.username}</li>)

    return (
      <div>
        <ul>
          {this.props.userCount} active users:
          <ul>
            { users }
          </ul>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users)
