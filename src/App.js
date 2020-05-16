<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
 
 
class App extends Component {
 
=======
import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'


class App extends Component {

>>>>>>> 25e96b5686a64b5542820773de70edeed4c08c43
  handleOnClickItems() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    })
  }
<<<<<<< HEAD
 
=======

>>>>>>> 25e96b5686a64b5542820773de70edeed4c08c43
  handleOnClickUsers() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_USERS',
    })
  }
<<<<<<< HEAD
 
=======

>>>>>>> 25e96b5686a64b5542820773de70edeed4c08c43
  render() {
    debugger
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
<<<<<<< HEAD
          <p> {this.props.items.length}</p>
=======
          <p>{this.props.items.length}</p>
>>>>>>> 25e96b5686a64b5542820773de70edeed4c08c43
      </div>
    )
  }
}
<<<<<<< HEAD
 
=======

>>>>>>> 25e96b5686a64b5542820773de70edeed4c08c43
const mapStateToProps = (state) => {
  return { items: state.items }
}
 
export default connect(mapStateToProps)(App)
