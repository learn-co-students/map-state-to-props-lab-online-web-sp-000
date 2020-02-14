import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(Users)
