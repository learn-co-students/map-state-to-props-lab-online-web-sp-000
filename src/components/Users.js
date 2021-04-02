import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    return (

      <div>
        <ul>
          Users!
          {this.props.users.map(user =>
            <li key={this.props.users.indexOf(user)+1}>{user.username} - {user.hometown}</li>
          )}
        </ul>
        {this.props.users.length}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
