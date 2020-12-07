import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(u => {
            return <li>{u.username}</li>
          })}
    {<p>Users: {this.props.users.length}</p>}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  console.log("mapState:", state.users)
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
