import { createSlice } from '@reduxjs/toolkit';
// import { accountApi } from '../../api/Account.api';
import {
  loginAccount, logoutAccount, refreshAccount, signupAccount
} from '../actions/account.actions';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    account: {},
    loggedIn: null,
    pending: false,
    error: false,
    logginError: false
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
      state.loggedIn = false;
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
      state.loginError = action.error;
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
      state.loggedIn = true;
    },
    [signupAccount.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
      state.loginError = action.error;
    },
  }
});
export default accountSlice.reducer;
