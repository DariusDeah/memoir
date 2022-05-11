import { createAsyncThunk } from '@reduxjs/toolkit';
import { accountApi } from '../../api/Account.api';

export const refreshAccount = createAsyncThunk('account/refresh', async () => {
  const { data } = await accountApi.refreshAccount();
  return data;
});

export const logoutAccount = createAsyncThunk('account/logout', async () => {
  const { data } = await accountApi.logoutAccount();
  return data;
});

export const loginAccount = createAsyncThunk('account/login', async (accountData) => {
  const { data } = await accountApi.loginAccount(accountData);
  return data;
});

export const signupAccount = createAsyncThunk('account/signup', async (accountData) => {
  const { data } = await accountApi.signupAccount(accountData);
  return data;
});
