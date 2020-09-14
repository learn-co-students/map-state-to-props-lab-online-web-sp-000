import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
  
  render() {
    return (
      <div>
        <ul>
          Users!
          <p>Count: {this.props.userCount}</p>
          {this.props.users.map((u) => (<li>{u.username} - {u.hometown}</li>))}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { 
    users: state.users, 
    userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
