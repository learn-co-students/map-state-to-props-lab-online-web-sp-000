import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => {
            return (
              <li>{user.username}</li>
            )
          })}
          {this.props.count}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = state => {
  return { 
    users: state.users, 
    count: state.users.length
  }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
