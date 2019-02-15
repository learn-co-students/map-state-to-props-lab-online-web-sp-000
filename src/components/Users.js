import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
        {this.props.users.map( (u) => {
          return (
            <li>{u.username}</li>
          )
        })}
        </ul>
        <p>{this.props.users.length}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  debugger;
  return { users: state.users }
}

export default connect(mapStateToProps)(Users);
