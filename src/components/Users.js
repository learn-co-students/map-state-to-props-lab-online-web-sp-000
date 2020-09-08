import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  allUsers = () => {
    let usernames = [];
    for (let u of this.props.users) {
      usernames.push(u.username)
    }
    return usernames;
  }

  renderUserInfo = () => {
    if (this.props.userCount > 0) {
      return(<React.Fragment><li>Name of users: {this.allUsers().join(", ")}</li>
      <li>Num of users: {this.props.userCount}</li></React.Fragment>)
    }
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.renderUserInfo()}
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
export default connect(mapStateToProps)(Users)
