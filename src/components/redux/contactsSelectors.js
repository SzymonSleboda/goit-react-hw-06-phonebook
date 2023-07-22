import { createSelector } from 'reselect';

const getContacts = state => state.contacts;
const getFilter = state => state.filter;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const optimizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(optimizedFilter)
    );
  }
);