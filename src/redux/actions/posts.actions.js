import { postApi } from '../../api/Post.api';
import { Post_Action_Types } from '../constants/action-types';

// Action creators
export const getPosts = (query) => async (dispatch) => {
  try {
    const { data } = await postApi.getPosts(query);
    dispatch({ type: Post_Action_Types.FETCH_ALL_Posts, payload: data });
  } catch (error) {
    console.error(error);
  }
};
export const getPost = (postId) => async (dispatch) => {
  try {
    const data = await postApi.getPost(postId);
    // console.log(data.post)
    dispatch({ type: Post_Action_Types.FETCH_ONE_Post, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getDraftPosts = () => async (dispatch) => {
  try {
    const { data } = await postApi.getDrafts();
    dispatch({ type: Post_Action_Types.FETCH_ALL_Draft_Posts, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    const data = await postApi.deletePost(postId);
    dispatch({ type: Post_Action_Types.DELETE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
