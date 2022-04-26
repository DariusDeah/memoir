import { commentApi } from '../../api/comment.api';
import { postApi } from '../../api/Post.api';
import { Comment_Action_Types } from '../constants/action-types';

export const getPostComments = (postId) => async (dispatch) => {
  try {
    const { data } = await postApi.getPostComments(postId);
    console.log(data);
    dispatch({ type: Comment_Action_Types.Fetch_Comments, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createComment = (postId, data) => async (dispatch) => {
  try {
    await postApi.commentPost(postId, data);
    dispatch({ type: Comment_Action_Types.Create_Comment, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getComments = (query) => async (dispatch) => {
  try {
    const { data } = await commentApi.getComments(query);
    dispatch({ type: Comment_Action_Types.Fetch_Comments, payload: data });
  } catch (error) {
    console.log(error);
  }
};
