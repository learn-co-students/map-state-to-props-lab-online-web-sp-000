import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    let renderUsers = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);


    return (
      <div>
        {this.props.users.length}
        <ul>
          {renderUsers}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);