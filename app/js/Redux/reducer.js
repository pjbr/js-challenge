import redux from 'redux';
import seed from '../data/seed';
import empty from '../data/empty';
import {ADD_CONTACT, SEED_CONTACTS} from './actiontypes';

// this is an action reducer, a simple switch will determine the action type and return a new state object if the state changes
if(localStorage.getItem('state')){
  var DEFAULT_STATE  = {
    contacts: JSON.parse(localStorage.getItem('state')),
    sort: {
      direction: 'ASC',
      field: 'lastname'
    }
  }
} else {
  var DEFAULT_STATE = {
    contacts: empty,
    sort: {
      direction: 'ASC',
      field: 'lastname'
    }
  }
};

function contactReducer(state=[], action){
  switch (action.type) {
    case 'ADD_CONTACT':
      localStorage.setItem('state', JSON.stringify([
        action.contact,
        ...state
      ]));
      return[
        action.contact,
        ...state
      ]
    case 'SEED_CONTACTS':
      localStorage.setItem('state', JSON.stringify([
        ...seed,
        ...state
      ]));
      return[
        ...seed,
        ...state
      ]
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

    //case 'SEARCH_TABLE':
    //case 'SEED_CONTACTS':
    default:
      return state
  }
}



