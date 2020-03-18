import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserInput extends Component {

    state = {
        username: '',
        hometown: ''
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        this.props.dispatch({
            type: 'ADD_USER',
            user: this.state // payload: this.state
        })
    }

    render() {
        return(
        <form onSubmit={this.handleOnSubmit}>
            <p><input
                type="text"
                id="username"
                onChange={this.handleInputChange}
                placeholder="username"
            /></p>

            <p><input
                type="text"
                id="hometown"
                onChange={this.handleInputChange}
                placeholder="hometown"
            /></p>

            <input type="submit" />
        </form>
        )
    }
}

// wrapping a component in connect() will, by default,
// pass one function to props: dispatch().

export default connect()(UserInput);

// this makes it possible to dispatch custom actions,
// as seen in handleOnSubmit().

// there are many ways to customize dispatches using connect,
// but using this.props.dispatch() like this is handy
// to allow any component to interact with the store
/*

NOTE:
when the form submits - or when someone clicks the submit button -

1. handleOnSubmit() is called
2. e.preventDefault() stops the page from refreshing
3. this.props.dispatch({ ... }) is then called with a custom action:
   { type: 'ADD_USER', user: this.state }

*/
