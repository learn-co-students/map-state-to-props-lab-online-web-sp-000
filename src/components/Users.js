import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './App.css';


class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map( (u) => {
            return (
              <li>{u.username}</li>
            )
          })}
          <p>{this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
