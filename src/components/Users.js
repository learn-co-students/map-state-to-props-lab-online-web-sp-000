import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends PureComponent {
  render() {
    return (
      <div>
        {this.props.usrNum}
        <ul>
          {this.props.usrs.map((usr, index) => <li>{usr.username}</li>)}
        </ul>
      </div>
    )
  }
}

export default connect((state) => { return {usrs: state.users, usrNum: state.users.length} })(Users)