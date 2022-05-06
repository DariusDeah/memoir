import { createSlice } from '@reduxjs/toolkit';
import {
  followUser, getUserFollowers, getUserFollowings, unfollowUser
} from '../actions/followers.actions';
import { getUser, updateUser } from '../actions/user.actions';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    followers: [],
    following: [],
    followingData: false,
    pending: false,
    error: false
  },
  reducers: {},
  extraReducers: {
    [getUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getUser.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.user.name = action.payload.name;
      state.user.photo = action.payload.photo;
      state.user.email = action.payload.email;
      state.user.id = action.payload._id;
      state.user.coverImg = action.payload.coverImg;
      state.user.bio = action.payload.bio;
    },
    [getUser.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
      state.user = {};
    },
    [updateUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.user.name = action.payload.name;
      state.user.photo = action.payload.photo;
      state.user.email = action.payload.email;
      state.user.id = action.payload._id;
      state.user.coverImg = action.payload.coverImg;
      state.user.bio = action.payload.bio;
    },
    [updateUser.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
    },
    [getUserFollowers.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getUserFollowers.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.followers = action.payload;
    },
    [getUserFollowers.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
      state.followingData = true;
    },
    [getUserFollowings.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getUserFollowings.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.following = action.payload;
      state.followingData = true;
    },
    [getUserFollowings.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
    },
    [followUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [followUser.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.followers.push(action.payload);
    },
    [followUser.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
    },
    [unfollowUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [unfollowUser.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.followers = state.followers.filter((user) => user._id !== action.payload._id);
    },
    [unfollowUser.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
    },

  }
});
export default userSlice.reducer;
