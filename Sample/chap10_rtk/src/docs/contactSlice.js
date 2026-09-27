import { createSelector, createSlice } from "@reduxjs/toolkit";

const emptyContactList = { pageno: 1, pagesize: 10, totalcount: 0, contacts: [] };
const emptyContact = { no: '', name: '', tel: '', address: '', photo: '' };

const initialState = {
  loading: false,
  error: null,
  contactList: emptyContactList,
  contact: emptyContact,
};

const contactSlice = createSlice({
  name: 'contactSlice',
  initialState,
  reducers: {
    clearContact: (state) => {
      state.contact = emptyContact;
    },
    clearError: (state) => {
      state.error = null;
    },
    // action => { name: evt.target.name, value: evt.target.value }
    changeContact: (state, action) => {
      state.contact[action.payload.name] = action.payload.value;
    },
  }
});

const selectContactState = (state) => state.contacts;

export const selectContactList = createSelector(
  [selectContactState],
  (contacts) => contacts.contactList
);
export const selectContact = createSelector(
  [selectContactState],
  (contacts) => contacts.contact
);
export const selectLoading = createSelector(
  [selectContactState],
  (contacts) => contacts.loading
);
export const selectError = createSelector(
  [selectContactState],
  (contacts) => contacts.error
);

export const { changeContact, clearContact, clearError } = contactSlice.actions;
export default contactSlice.reducer;
