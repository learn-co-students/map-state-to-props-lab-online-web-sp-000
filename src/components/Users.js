import React, { Component } from 'react';
import {connect} from "react-redux";
class Users extends Component {

  render() {
    return (
      <div>
          <div>
              Total Users: {this.props.userCount}
          </div>
        <ul>
            {this.props.users.map(user => {return(
                <li key={user.id}>{user.username}</li>)})}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state){
    return {users: state.users,
    userCount: state.users.length}
}
//add mapStateToProps here

// connect this component to Redux
export default  connect(mapStateToProps)(Users)