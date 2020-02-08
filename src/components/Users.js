import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {

    const users = this.props.users.map(user => {
      return <li key={user.username}>Name: {user.username}, Hometown: {user.hometown}</li>
    });
    return (
      <div>
        <ul>
          {this.props.users.map(user => {
          
          return <li> {user.username}</li>

          })}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {

  return {users: state.users};
};
// connect this component to Redux
export default connect(mapStateToProps)(Users)
