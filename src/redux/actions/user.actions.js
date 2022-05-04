/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '../../api/User.api';

// eslint-disable-next-line import/prefer-default-export
export const getUser = createAsyncThunk('user/fetch', async (userId) => {
  const { data } = await userApi.getUserById(userId);
  return data;
});

export const updateUser = createAsyncThunk('account/update', async (userId, userData) => {
  console.log({ userData });
  const { data } = await userApi.updateUser(userId, userData);
  return data;
});
