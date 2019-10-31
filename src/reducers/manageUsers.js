export default function manageUsers(state = {
  users: [],
}, action){
  switch (action.type) {
    case 'ADD_USER':
      console.log('adding ', action.user);
      return {
        ...state,
        users: [...state.users, action.user]
      }

    default:
      return state;
  }
};
// u action.useru je NOVI KREIRANI user iz FORMa
//  UserInput.js ->   <form onSubmit={this.handleOnSubmit}>
