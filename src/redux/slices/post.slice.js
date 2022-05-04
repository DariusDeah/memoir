import { createSlice } from '@reduxjs/toolkit';
import { getDraftPosts, getPost, getPosts } from '../actions/posts.actions';

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    post: {},
    pending: false,
    error: false,
    postData: false
  },
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
      state.posts = [];
      state.postData = false;
    },
    [getPost.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getPost.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.post = action.payload;
      state.postData = true;
    },
    [getPost.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
      state.post = {};
    },
    [getDraftPosts.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },

    [getDraftPosts.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.posts = action.payload;
    },
    [getDraftPosts.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },

  },
});
export default postSlice.reducer;
