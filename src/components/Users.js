import React, { Component } from 'react';
import { connect } from 'react-redux' ;
class Users extends Component {

  render() {
    const userDisplay = this.props.users.map(user => <li>{user.username}</li>);
    return (
      <div>
       <div> total number {this.props.users.length}</div>
        <ul>
          {userDisplay}
        </ul>
      </div>
    );
  }
}

//add mapStateToProps here
const mapStateToProps =  state => {
  return {users: state.users };
};

export default connect(mapStateToProps)(Users);