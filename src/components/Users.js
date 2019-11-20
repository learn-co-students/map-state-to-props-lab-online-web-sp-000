import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, id) => <li key={id}>{user.username}</li>)}
  
        </ul>
        <p>Total users: {this.props.number}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users, number: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
