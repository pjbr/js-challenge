//import actionTypes export Actions
import {ADD_CONTACT, SEED_CONTACTS} from './actiontypes';

export function addContact(contact){
  return{ type: ADD_CONTACT, contact: contact };
}
export function seedContacts(){
  return{type: SEED_CONTACTS};
}
