import { createAsyncThunk } from '@reduxjs/toolkit';
import { postApi } from '../../api/Post.api';

export const getPostLikes = createAsyncThunk('likes/fetch', async (postId) => {
  const { data } = await postApi.getPostLikes(postId);
  return data;
});

export const unlikePost = createAsyncThunk('likes/unlikePost', async (postId) => {
  const { data } = await postApi.unlikePost(postId);
  return (data);
});

export const likePost = createAsyncThunk('likes/likePost', async (postId) => {
  const { data } = await postApi.likePost(postId);
  return (data);
});
