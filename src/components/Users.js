import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let k = 0
    return (
      <div>
        <ul>
          {this.props.users.map(user => {
            k += 1
            return <li key={k}>{user.username}</li>
          })}<br/>
          <p>{this.props.userCount} Users!</p>
        </ul>
      </div>
    )
  }
}

  const mapStateToProps = state => {
    return {
      users: state.users,
      userCount: state.users.length
    }
  }

export default connect(mapStateToProps)(Users)
