//import actionTypes export Actions
import {ADD_CONTACT, SORT_TABLE, SEARCH_TABLE, SEED_CONTACTS} from './actiontypes';

export function addContact(contact){
  return{ type: ADD_CONTACT, contact: contact };
}
export function sortTable(direction, field){
  return{ type: SORT_TABLE, direction: direction, field: field };
}
export function sortTable(query){
  return{ type: SEARCH_TABLE, query: query };
}
export function seedContacts(count){
  return{ type: SEED_CONTACTS, count: count };
}
