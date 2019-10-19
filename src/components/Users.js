import React, { Component } from 'react';
import { connect } from 'react-redux'


// {this.props.users.map((user, index) => (
//   <li>  {user.username} </li>
// ))}
class Users extends Component {

  render() {
      let list = this.props.users.map((user, index) => 
          <li key={index}> {user.username} </li>);
    return (
      <div>
        <ul>
          {list}
        </ul>
          {this.props.usercount}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users,
           usercount: state.users.length }
}

//add mapStateToProps here

export default connect(mapStateToProps)(Users);
