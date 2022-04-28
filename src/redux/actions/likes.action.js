import { postApi } from '../../api/Post.api';
import { Likes_Action_Types } from '../constants/action-types';

export const getPostLikes = (postId) => async (dispatch) => {
  const data = await postApi.getPostLikes(postId);
  console.log(data);
  dispatch({ type: Likes_Action_Types.FETCH_LIKES, payload: data });
};
