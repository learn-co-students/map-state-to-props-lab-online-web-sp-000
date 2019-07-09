import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {
  //BUGS: use console.log(name of key, this.props.<path to key>)
  //BUGS: surround console.log with console.group (google or see syntax below)
  //BUGS: debugger
  // console.group(`Inside the user component`)
  //   console.log('username', this.props.user.username);
  //   console.log('hometown', this.props.user.hometown);
  // console.groupEnd()
  render() {

    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>)
    debugger
    return (
      <div>
        {this.props.users.length}
        <ul>
          {users}
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
