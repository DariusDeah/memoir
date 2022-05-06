import { createAsyncThunk } from '@reduxjs/toolkit';
import { postApi } from '../../api/Post.api';
import { Post_Action_Types } from '../constants/action-types';

// Action creators
export const getPosts = createAsyncThunk('post/fetchPosts', async (query) => {
  const { data } = await postApi.getPosts(query);
  return data;
});
export const getFeaturedPosts = createAsyncThunk('post/fetchFeaturedPosts', async () => {
  const { data } = await postApi.getFeaturedPosts();
  return data;
});

export const getPost = createAsyncThunk('post/fetchOnePost', async (postId) => {
  const { data } = await postApi.getPost(postId);
  return data;
});

export const getDraftPosts = createAsyncThunk('post/fetchDrafts', async () => {
  const { data } = await postApi.getDrafts();
  return data;
});
export const getPostFeed = createAsyncThunk('post/fetchFeed', async () => {
  const { data } = await postApi.getPostFeed();
  return data;
});
export const deletePost = createAsyncThunk('post/delete', async (postId) => {
  const { data } = await postApi.deletePost(postId);
  return data;
});
export const editPostData = createAsyncThunk('post/edit', async (postData) => {
  const { postId, ...values } = postData;
  const { data } = await postApi.editPost(postId, values);
  return data;
});
export const getRelatedPosts = createAsyncThunk('post/fetchRelated', async (postId) => {
  const { data } = await postApi.getRelatedPosts(postId);
  return data;
});
