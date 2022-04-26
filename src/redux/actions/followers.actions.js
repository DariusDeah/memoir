import { userApi } from '../../api/User.api';
import { Followers_Action_Types } from '../constants/action-types';

export const getUserFollowers = (userId) => async (dispatch) => {
  try {
    const { data } = await userApi.getFollowers(userId);
    dispatch({ type: Followers_Action_Types.FetchFollowers, payload: data });
  } catch (error) {
    throw new Error(error);
  }
};
