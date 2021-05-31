import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here

const mapStateToProps = (state) => {
  return { users: state.users }
} 
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => {
            return(
              <div className="user_name_card" key={user.index}>
                {user.username}
              </div>
            )
          })}
          {this.props.users.length}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

// connect this component to Redux
export default connect(mapStateToProps)(Users)
