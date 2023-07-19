import { createAction, createReducer } from '@reduxjs/toolkit';


export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');


const contactsReducer = createReducer([], builder => {
  builder
    .addCase(addContact, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    });
});

export default contactsReducer;