import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
  key: "contacts",
  storage,
};
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

//Selectors
export const getContacts = (state) => state.contacts.contacts;
