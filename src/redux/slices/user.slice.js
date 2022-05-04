import { createSlice } from '@reduxjs/toolkit';
import { getUser, updateUser } from '../actions/user.actions';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    followers: {},
    following: {},
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

  }
});
export default userSlice.reducer;
