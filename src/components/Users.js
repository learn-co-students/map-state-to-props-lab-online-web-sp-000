import React, { Component } from 'react';

// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {

    render() {
        console.log(`Users.js -> render -> this.props.users:`, this.props.users)

        // let users = this.props.users.map(user => <li>{user.username}</li>)

        let users = this.props.users.map((user, index) => (
            <li key={index}>{user.username} is from {user.hometown}</li>)
        )

        return (
        <div>
            <h1>Users: {this.props.users.length}</h1>
            <ul>
            {/* Write code here that displays the usernames of all users in the Redux store */}
            { users }
            </ul>

            {/* In addition, display the total number of users curently in the store */}

        </div>
        )
    }
}

//add mapStateToProps here
const mapStateToProps = state => {
    return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)


// QUESTION:
// class Users extends Component {
//
//     render() {
//         console.log(`Users.js -> render -> this.props.users:`, this.props.users)
//
//         return (
//         <div>
//             <ul>
//             Users!
//             {/* Write code here that displays the usernames of all users in the Redux store */}
//
//             {/* In addition, display the total number of users curently in the store */}
//             </ul>
//         </div>
//         )
//     }
// }
//
// //add mapStateToProps here
// const mapStateToProps = state => {
//     return { users: state.users }
// }
//
// // connect this component to Redux
// export default connect(mapStateToProps)(Users)
