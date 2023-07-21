import { createSlice, createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
];

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addContact, (state, action) => {
        state.push({ ...action.payload, id: uuidv4() });
        localStorage.setItem('contacts', JSON.stringify(state));
      })
      .addCase(deleteContact, (state, action) => {
        const contactId = action.payload;
        return state.filter(contact => contact.id !== contactId);
      });
  },
});

export default contactsSlice.reducer;