import { collectionApi } from '../../api/collections.api';
import { Collection_Action_Types } from '../constants/action-types';

export const getCollections = (userId) => async (dispatch) => {
  try {
    const data = await collectionApi.getUserCollections(userId);
    dispatch({ type: Collection_Action_Types.Fetch_Collection, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createCollections = (collectionData) => async (dispatch) => {
  try {
    await collectionApi.createCollection(collectionData);
    dispatch({ type: Collection_Action_Types.SET_COLLECTION, payload: collectionData });
  } catch (error) {
    console.log(error);
  }
};
