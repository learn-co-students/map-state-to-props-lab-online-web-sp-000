import React, { Component } from "react";
// add any needed imports here
import { connect } from "react-redux";
class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map((user, index) => {
            return (
              <div className="user" key={index}>
                <li>
                  {user.username} from {user.hometown}
                </li>
              </div>
            );
          })}
          {/* In addition, display the total number of users curently in the store */}
          <h3>Total number of users: {this.props.users.length}</h3>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};
// connect this component to Redux
export default connect(mapStateToProps)(Users);
