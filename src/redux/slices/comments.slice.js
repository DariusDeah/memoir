import { createSlice } from '@reduxjs/toolkit';
import { createComment, getPostComments } from '../actions/comments.actions';

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
  },
});
export default commentSlice.reducer;
