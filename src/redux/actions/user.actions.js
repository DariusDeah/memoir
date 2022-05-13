/* eslint-disable camelcase */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '../../api/User.api';

export const getUser = createAsyncThunk('user/fetch', async (userId) => {
  const { data } = await userApi.getUserById(userId);
  return data;
});

export const updateUser = createAsyncThunk('account/update', async (userData) => {
  const { userId, values } = userData;
  const { data } = await userApi.updateUser(userId, values);
  return data;
});
