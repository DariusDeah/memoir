import { createAsyncThunk } from '@reduxjs/toolkit';
import { commentApi } from '../../api/comment.api';
import { postApi } from '../../api/Post.api';

export const getPostComments = createAsyncThunk('comment/fetch', async (postId) => {
  const { data } = await postApi.getPostComments(postId);
  return data;
});

export const createComment = createAsyncThunk('comment/create', async (commentData) => {
  const { postId, values } = commentData;
  const { data } = await postApi.commentPost(postId, values);
  return data;
});

export const getComments = createAsyncThunk('comments/fetch', async (query) => {
  const { data } = await commentApi.getComments(query);
  return data;
});

export const editComment = createAsyncThunk('comments/edit', async (commentData) => {
  const { commentId, values } = commentData;
  const { data } = await commentApi.editComment(commentId, values);
  return data;
});
export const deleteComment = createAsyncThunk('comments/delete', async (commentId) => {
  const { data } = await commentApi.deleteComment(commentId);
  return data;
});
