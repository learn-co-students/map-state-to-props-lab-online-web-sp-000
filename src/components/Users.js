import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li>{user.username}</li> )}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  
  return {users: state.users }
  
}

//add mapStateToProps here

// connect this component to Redux
export default connect(mapStateToProps)(Users)
