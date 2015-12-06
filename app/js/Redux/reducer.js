const redux = require('redux');

//these are actions
const ADD_CONTACT = 'ADD_CONTACT';
function addContact(contact){
  return{ type: ADD_CONTACT, contact: contact };
}

const SORT_TABLE = 'SORT_TABLE';
function sortTable(direction, field){
  return{ type: SORT_TABLE, direction: direction, field: field };
}

const SEARCH_TABLE = 'SEARCH_TABLE';
function sortTable(query){
  return{ type: SEARCH_TABLE, query: query };
}

const SEED_CONTACTS = 'SEED_CONTACTS';
function seedContacts(count){
  return{ type: SEED_CONTACTS, count: count };
}

// this is an action reducer, a simple switch will determine the action type and return a new state object if the state changes
const DEFAULT_STATE = {
  contacts: [],
  sort: {
    direction: 'ASC',
    field: 'lastname'
  }
};

function contactReducer(state=[], action){
  switch (action.type) {
    case 'ADD_CONTACT':
      return[
        ...state,
        action.contact
      ]
    case 'SEED_CONTACTS':
    default:
      return state
  }
};
module.exports = function appReducer(state=DEFAULT_STATE, action){
  switch (action.type) {
    case 'ADD_CONTACT':
    case 'SEED_CONTACTS':
      return Object.assign({}, state, {
        contacts: contactReducer(state.contacts, action)
      })
    case 'SORT_TABLE':

      if('DESC' === action.direction){

      };

    case 'SEARCH_TABLE':

    case 'SEED_CONTACTS':

    default:
      return state
  }
}



