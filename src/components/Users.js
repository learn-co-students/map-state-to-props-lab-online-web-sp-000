import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './App.css';
class Users extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.users.length}
          {this.props.users.map(function(user, index) {
            return <li key={index}>{user.username}</li>
          })}
          
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

const mapToStateProps = (state) => {
  return {users: state.users}
}

export default connect(mapToStateProps)(Users);
