import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
          <h2>Users!</h2>
          <ul>{this.props.users.map(e => <li>{e.username} : {e.hometown}</li> )}</ul>
          <strong>Total Users</strong>: {this.props.users.length}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return { users: state.users }
}

export default connect(mapStateToProps)(Users)
