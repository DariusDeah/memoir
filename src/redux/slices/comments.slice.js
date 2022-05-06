import { createSlice } from '@reduxjs/toolkit';
import {
  createComment, editComment, getComments, getPostComments
} from '../actions/comments.actions';

export const commentSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    error: false,
    pending: false,
    data: false
  },
  reducers: {},
  extraReducers: {
    [createComment.pending]: (state) => {
      state.pending = true;
      state.error = false;
      state.data = false;
    },
    [createComment.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.comments.unshift(action.payload);
      state.data = true;
    },
    [createComment.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
    },
    [getPostComments.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getPostComments.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.comments = action.payload;
      state.data = true;
    },
    [getPostComments.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
      state.comments = [];
    },
    [getComments.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getComments.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.comments = action.payload;
      state.data = true;
    },
    [getComments.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
      state.comments = [];
    },
    [editComment.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [editComment.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.comments = action.payload;
      state.data = true;
    },
    [editComment.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
      state.comments = [];
    },
  },
});
export default commentSlice.reducer;
