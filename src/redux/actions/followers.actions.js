import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '../../api/User.api';

export const getUserFollowers = createAsyncThunk('followers/fetch', async (userId) => {
  const { data } = await userApi.getFollowers(userId);
  return data;
});

export const getUserFollowings = createAsyncThunk('followings/fetch', async (userId) => {
  const { data } = await userApi.getUserFollowings(userId);
  return data;
});
export const followUser = createAsyncThunk('follow/create', async (userId) => {
  const { data } = await userApi.followUser(userId);
  return data;
});
export const unfollowUser = createAsyncThunk('follow/delete', async (userId) => {
  const { data } = await userApi.unfollowUser(userId);
  return data;
});
