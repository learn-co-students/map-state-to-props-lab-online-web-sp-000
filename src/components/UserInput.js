import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserInput extends Component {

  state = {
    username: '',
    hometown: ''
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch({
      type: 'ADD_USER',
      user: this.state
    })
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <p>
          <input
            type="text"
            id="username"
            onChange={this.handleInputChange}
            placeholder="username"
          />
        </p>
        <p>
          <input
            type="text"
            id="hometown"
            onChange={this.handleInputChange}
            placeholder="hometown"
          />
        </p>
        <input type="submit" />
      </form>
    )
  }
}

export default connect()(UserInput)
