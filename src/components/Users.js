import React from "react";
import { connect } from "react-redux";

class Users extends React.Component {
	render() {
		return (
			<div>
				<br/><br/>
				Users!
				<ul>
					{this.props.users.map((user, index) => <li key={index}>{user.username}</li>)}
				</ul>
				{`Number of users: ${this.props.userCount}!`}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.users,
		userCount: state.users.length
	}
}

export default connect(mapStateToProps)(Users)
