import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux';


class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          <div>Total Number of Users: {this.props.users.length}</div>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.props.users.map(user=> {
            return <li>User: {user.username} Hometown: {user.hometown}</li>
          })}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  console.log(state.users)
  return { 
    users: state.users      
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);

//export default connect()(Users);

