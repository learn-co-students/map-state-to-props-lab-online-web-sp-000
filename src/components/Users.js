import React, { Component } from 'react';
import { connect } from 'react-redux';
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <ul>
          {this.props.users.map((user, i) => (
            <li key={i}>
              <h3>{user.username}</h3>
              <p>Hometown: {user.hometown}</p>
            </li>
          ))}
          </ul>
          {<p>Total Users: {this.props.userCount}</p>}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
    return { users: state.users, userCount: state.users.length };
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);