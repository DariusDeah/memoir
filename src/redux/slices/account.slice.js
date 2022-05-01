import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { accountApi } from '../../api/Account.api';
import {
  loginAccount, logoutAccount, refreshAccount, signupAccount, updateUser
} from '../actions/account.actions';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    account: {
      name: '',
      email: '',
      photo: '',
      id: '',
      auth: false,
    },
    logginError: null,
    pending: null,
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
      state.account.name = action.payload.name;
      state.account.photo = action.payload.photo;
      state.account.email = action.payload.email;
      state.account.id = action.payload._id;
      state.account.auth = true;
    },
    [refreshAccount.rejected]: (state) => {
      state.pending = null;
      state.error = true;
      state.account.auth = false;
    },

    [logoutAccount.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [logoutAccount.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.account = null;
    },
    [logoutAccount.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },

    [loginAccount.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [loginAccount.fulfilled]: (state, action) => {
      state.account.auth = true;
      state.pending = false;
      state.error = false;
      state.account.name = action.payload.name;
      state.account.photo = action.payload.photo;
      state.account.email = action.payload.email;
      state.account.id = action.payload._id;
    },
    [loginAccount.rejected]: (state, action) => {
      state.pending = false;
      state.auth = false;
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
      state.account.auth = true;
      state.account.name = action.payload.name;
      state.account.photo = action.payload.photo;
      state.account.email = action.payload.email;
      state.account.id = action.payload._id;
    },
    [signupAccount.rejected]: (state, action) => {
      state.auth = false;
      state.pending = false;
      state.auth = false;
      state.error = action.error;
    },
    [updateUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
      state.logginError = false;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
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
