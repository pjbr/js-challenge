import redux from 'redux';
import {ADD_CONTACT, SORT_TABLE, SEARCH_TABLE, SEED_CONTACTS} from './actiontypes';

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
export function appReducer(state=DEFAULT_STATE, action){
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



