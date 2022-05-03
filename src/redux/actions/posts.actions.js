import { createAsyncThunk } from '@reduxjs/toolkit';
import { postApi } from '../../api/Post.api';
import { Post_Action_Types } from '../constants/action-types';

// Action creators
export const getPosts = createAsyncThunk('post/fetchPosts', async (query) => {
  const { data } = await postApi.getPosts(query);
  return data;
});

export const getPost = createAsyncThunk('post/fetchOnePost', async (postId) => {
  const { data } = await postApi.getPost(postId);
  return data;
});

export const getDraftPosts = () => async (dispatch) => {
  const { data } = await postApi.getDrafts();
  return data;
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    const data = await postApi.deletePost(postId);
    dispatch({ type: Post_Action_Types.DELETE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
