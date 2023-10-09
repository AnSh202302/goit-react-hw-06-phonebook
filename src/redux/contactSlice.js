import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const contactSlice = createSlice({
  name: 'contact',
  initialState: initialState.contacts,
  reducers: {
    createUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      return state.filter(el => el.id !== action.payload);
    },
  },
});
export const contactReducer = contactSlice.reducer;
export const { createUser, deleteUser } = contactSlice.actions;
