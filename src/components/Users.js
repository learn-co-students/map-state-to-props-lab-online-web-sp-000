import React, { Component } from 'react';
// add any needed imports here
import App from '../App';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>

          Users!
          {this.props.userCount}
          <ul>
          {this.props.users.map((user, index) => <li key={index}>{user.username}</li>)}

        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return { users: state.users,
  userCount: state.users.length };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users)
