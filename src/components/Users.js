import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  renderUsers = () => (
    this.props.users.map(u => (
      <li>
        <h3>{u.username}</h3>
        <h4>{u.hometown}</h4>
      </li>
    ))
  )

  render() {
    return (
      <div>
        <ul>
          Users!
          {`${this.props.count} users:`}
          {this.renderUsers()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (({ users }) => ({ users, count: users.length }))
// connect this component to Redux
export default connect(mapStateToProps)(Users)
