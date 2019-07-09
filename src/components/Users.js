import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    // debugger
    return (
      <div>
        <ul>
          {this.props.users.map((user, index) => (<li key={index}>{user}</li>}))
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    users: state.users,
    numberOfUsers: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
