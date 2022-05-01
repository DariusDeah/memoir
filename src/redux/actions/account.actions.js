import { createAsyncThunk } from '@reduxjs/toolkit';
import { accountApi } from '../../api/Account.api';
import { userApi } from '../../api/User.api';
// import { Account_Action_Types } from '../constants/action-types';

// export const getAccount = () => async (dispatch) => {
//   const { data } = await accountApi.refreshAccount();
//   dispatch({ type: Account_Action_Types.FETCH_Account, payload: data });
// };
// export const createAccount = (accountData) => async (dispatch) => {
//   const { data } = await accountApi.creatAccount(accountData)
//   dispatch({type:Account_Action_Types.SET_Account, payload: data})
// }

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

export const updateUser = createAsyncThunk('account/update', async (userId, userData) => {
  const { data } = await userApi.updateUser(userId, userData);
  return data;
});
