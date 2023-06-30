import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/contacts/contactsSelectors';

export const selectFilter = state => state.filter;

export const filterListContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
