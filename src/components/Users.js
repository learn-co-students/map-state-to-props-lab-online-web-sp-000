import React, { Component } from 'react';
import { connect } from "react-redux";

class Users extends Component {

  render() {
    return (
      <div>
        <p>{this.props.users.length} users!</p>
        <ul>
          {this.props.users.map(user => 
            <li>{user.username} from {user.hometown}</li>
            )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users)
