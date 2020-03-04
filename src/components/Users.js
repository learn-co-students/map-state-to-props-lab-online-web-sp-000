import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(e => <li>{e.username}, {e.hometown}</li>)}
        </ul>
        User count: { this.props.users.length }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  debugger;
  return { users: state.users }
}

export default connect(mapStateToProps)(Users);
