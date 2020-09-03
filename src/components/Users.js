import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.state.users.forEach((user) => {<li>user.name</li>})}
          {this.state.users.count}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

// connect this component to Redux

const mapStateToProps = (state) => {
  return { users: state.users }
}
 
export default connect()(Users);
