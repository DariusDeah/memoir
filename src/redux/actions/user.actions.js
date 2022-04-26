/* eslint-disable camelcase */
import { userApi } from '../../api/User.api';
import { User_Action_Types } from '../constants/action-types';

// eslint-disable-next-line import/prefer-default-export
export const getUser = (userId) => async (dispatch) => {
  const { data } = await userApi.getUserById(userId);
  console.log(data);
  dispatch({ type: User_Action_Types.Fetch_User, payload: data });
};
