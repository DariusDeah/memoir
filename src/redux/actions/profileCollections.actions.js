import { collectionApi } from '../../api/collections.api';
import { Profile_Collection_Action_Types } from '../constants/action-types';

export const getProfileCollections = (userId) => async (dispatch) => {
  try {
    const data = await collectionApi.getUserCollections(userId);
    dispatch({ type: Profile_Collection_Action_Types, payload: data });
  } catch (error) {
    console.log(error);
  }
};
