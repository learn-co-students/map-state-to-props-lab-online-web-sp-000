import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(user => <li>{user.username}</li>)}
        </ul>
        <div>Current total users: {this.props.userCount}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
	   users: state.users,
	   userCount: state.users.length
	};
};

export default connect(mapStateToProps)(Users);
