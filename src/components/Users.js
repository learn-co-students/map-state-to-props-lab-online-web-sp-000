import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {
    debugger;
    return (
      <div>
        <ul>
          Users!
          {this.props.users.forEach(user => user.username)}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
