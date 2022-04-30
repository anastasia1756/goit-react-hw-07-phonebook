import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterContact(state, action) {
      return action.payload;
    },
    deleteSearchingContact(state, action) {
      return action.payload;
    },
  },
});
export const { deleteSearchingContact, filterContact } = filterSlice.actions;

//Selectors
export const getFilter = (state) => state.filter;
