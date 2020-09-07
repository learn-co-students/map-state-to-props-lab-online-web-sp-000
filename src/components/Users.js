import React, { Component } from 'react';
import { connect } from 'react-redux'
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
     {console.log('this props user', this.props.users)}
     <ul>
     {this.props.users.map(element => <li>{element.username}</li>)}
     </ul>
          <p>Total Users: {this.props.userCount}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  //debugger;
  return {
    userCount: state.users.length,
    users: state.users
  }
}
// connect this component to Redux

export {Users}
export default connect(mapStateToProps)(Users)
