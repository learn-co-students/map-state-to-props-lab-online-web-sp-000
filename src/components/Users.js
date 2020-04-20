import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  state = {
    users: []
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          <ul>{this.props.users.map(User)}</ul>
          <p>Look kids, this many users : {this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

const User = ({ username, hometown }) => {
  return <li>{username}: {hometown}</li>
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {users: state.users};
}
// connect this component to Redux
export default connect(mapStateToProps)(Users);
