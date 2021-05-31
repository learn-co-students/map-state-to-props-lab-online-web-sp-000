import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => {
            return(<li>{user.username}</li>)
          })}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
} 

export default connect(mapStateToProps)(Users)
