import React, { Component } from 'react';
// add any needed imports here
import {connect} from 'react-redux';


class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(item => <li>{item.username} {item.hometown}</li>)}
        </ul>
        <p>Total: {this.props.users.length}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {users: state.users}
}
// connect this component to Redux
export default connect(mapStateToProps)(Users);
