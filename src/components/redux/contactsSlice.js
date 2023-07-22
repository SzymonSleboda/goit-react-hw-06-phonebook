import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const loadContactsFromLocalStorage = () => {
  try {
    const contacts = localStorage.getItem('contacts');
    return contacts ? JSON.parse(contacts) : [];
  } catch (error) {
    console.error('Error loading contacts from localStorage:', error);
    return [];
  }
};

const saveContactsToLocalStorage = contacts => {
  try {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  } catch (error) {
    console.error('Error saving contacts to localStorage:', error);
  }
};

const initialState = loadContactsFromLocalStorage(); 

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.push({ ...action.payload, id: uuidv4() });
      saveContactsToLocalStorage(state);
    },
    deleteContact: (state, action) => {
      const contactId = action.payload;
      return state.filter(contact => contact.id !== contactId);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;