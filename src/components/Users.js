import React, { Component } from 'react';
import { connect } from 'react-redux'
import manageUsers from '../reducers/manageUsers';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.username}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { input : state.inputs}
}


// connect this component to Redux
export default connect(mapStateToProps)(Users)
