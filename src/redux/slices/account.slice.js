import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { accountApi } from '../../api/Account.api';
import {
  loginAccount, logoutAccount, refreshAccount, signupAccount, updateUser
} from '../actions/account.actions';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    account: {},
    loggedIn: null,
    pending: false,
    error: false
  },
  reducers: {},
  extraReducers: {
    [refreshAccount.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [refreshAccount.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.loggedIn = true;
      state.account.name = action.payload.name;
      state.account.photo = action.payload.photo;
      state.account.email = action.payload.email;
      state.account.id = action.payload._id;
    },
    [refreshAccount.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
      state.account = {};
      state.loggedIn = false;
    },

    [logoutAccount.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [logoutAccount.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.loggedIn = false;
      state.account = {};
    },
    [logoutAccount.rejected]: (state) => {
      state.pending = false;
      state.error = true;
      state.loggedIn = false;
    },

    [loginAccount.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [loginAccount.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.loggedIn = true;
      state.account.name = action.payload.name;
      state.account.photo = action.payload.photo;
      state.account.email = action.payload.email;
      state.account.id = action.payload._id;
    },
    [loginAccount.rejected]: (state, action) => {
      state.pending = false;
      state.loginError = true;
      state.error = action.error;
    },
    [signupAccount.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [signupAccount.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.account.name = action.payload.name;
      state.account.photo = action.payload.photo;
      state.account.email = action.payload.email;
      state.account.id = action.payload._id;
    },
    [signupAccount.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
    },
    [updateUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.loggedIn = true;
      state.account.name = action.payload.name;
      state.account.photo = action.payload.photo;
      state.account.email = action.payload.email;
      state.account.id = action.payload._id;
    },
    [updateUser.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
    }
  }
});
export const { } = accountSlice.actions;
export default accountSlice.reducer;
