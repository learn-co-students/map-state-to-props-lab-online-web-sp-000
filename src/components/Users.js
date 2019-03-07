import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  createUsers = () => {
    return this.props.users.map(user => <li>{user.username} from {user.hometown}</li>)
  }

  render() {
    return (
      <div>
        <ul>
          {this.createUsers()}
        </ul>
        <p>{this.props.totalUsers}</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users,
            totalUsers: state.users.length}
}
//add mapStateToProps here
// export default connect()(UserInput);
export default connect(mapStateToProps)(Users);
