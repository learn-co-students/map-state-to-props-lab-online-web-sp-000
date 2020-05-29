import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map( u => (<li>{u.username}</li>))}<br/>
          {this.props.userCount} total users
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length };
}

export default connect(mapStateToProps)(Users);
