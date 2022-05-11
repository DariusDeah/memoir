import { createSlice } from '@reduxjs/toolkit';
import {
  createPost,
  getDraftPosts, getFeaturedPosts, getPost, getPostFeed, getPosts, getRelatedPosts
} from '../actions/posts.actions';

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    post: {},
    featuredPosts: [],
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
      state.postData = false;
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
    [createPost.pending]: (state) => {
      state.pending = true;
      state.error = false;
      state.postData = false;
    },
    [createPost.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.post = action.payload;
      state.postData = true;
    },
    [createPost.rejected]: (state, action) => {
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
    [getPostFeed.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },

    [getPostFeed.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.posts = action.payload;
    },
    [getPostFeed.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },
    [getFeaturedPosts.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },

    [getFeaturedPosts.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.featuredPosts = action.payload;
    },
    [getFeaturedPosts.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },
    [getRelatedPosts.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },

    [getRelatedPosts.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.posts = action.payload;
    },
    [getRelatedPosts.rejected]: (state, action) => {
      state.pending = false;
      state.error = true;
    },

  },
});
export default postSlice.reducer;
