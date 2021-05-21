import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.usersSize}
          {this.props.users.map(user => <li>{user.username}, from {user.hometown}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    users: state.users,
    usersSize: state.users.length
  }
}

export default connect(mapStateToProps) (Users);
