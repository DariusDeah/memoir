import { createAsyncThunk } from '@reduxjs/toolkit';
import { commentApi } from '../../api/comment.api';
import { postApi } from '../../api/Post.api';
import { Comment_Action_Types } from '../constants/action-types';

export const getPostComments = createAsyncThunk('comment/fetch', async (postId) => {
  const { data } = await postApi.getPostComments(postId);
  return data;
});

export const createComment = createAsyncThunk('comment/create', async (commentData) => {
  console.log({ commentData });
  const { postId, values } = commentData;
  const { data } = await postApi.commentPost(postId, values);
  return data;
});

export const getComments = (query) => async (dispatch) => {
  try {
    const { data } = await commentApi.getComments(query);
    dispatch({ type: Comment_Action_Types.Fetch_Comments, payload: data });
  } catch (error) {
    console.log(error);
  }
};
