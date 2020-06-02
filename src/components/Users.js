import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    // debugger;
    return (
      <div>
        <ul>
          Users!
          {showUsers(this.props)}
          {`\nThere are ${this.props.userCount} user(s) in this store`}
        </ul>
      </div>
    )
  }
}

function showUsers(props) {
  return props.users.map((user, i) => <li key={i}>{`${user.username} from ${user.hometown}`}</li>)
}

//add mapStateToProps here
const mapStateToProps = (state) =>{
  return {
    users: state.users,
    userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
