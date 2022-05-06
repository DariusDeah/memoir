import { createSlice } from '@reduxjs/toolkit';
import { getPostLikes, likePost, unlikePost } from '../actions/likes.action';

export const likeSlice = createSlice({
  name: 'likes',
  initialState: {
    likes: [],
    error: false,
    pending: false,
    likesData: false
  },
  reducers: {},
  extraReducers: {
    [likePost.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [likePost.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.likes.push(action.payload);
    },
    [likePost.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
    },
    [getPostLikes.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getPostLikes.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.likes = action.payload;
      state.likesData = true;
    },
    [getPostLikes.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
      state.likes = [];
    },
    [unlikePost.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [unlikePost.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.likes = state.likes.filter((likes) => likes._id !== action.payload._id);
    },
    [unlikePost.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
    },
  },
});
export default likeSlice.reducer;
