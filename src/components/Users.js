import React, { Component } from 'react';

import connect from 'react-redux/lib/connect/connect';

// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => <li>{user.username}</li>)}
          {this.props.count}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { 
    users: state.users,
    count: state.users.length
  }
}
//add mapStateToProps here

// connect this component to Redux
export default connect(mapStateToProps)(Users)
