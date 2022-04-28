import { collectionApi } from '../../api/collections.api';
import { Collection_Action_Types } from '../constants/action-types';

export const getCollectionById = (collectionId) => async (dispatch) => {
  try {
    const data = await collectionApi.getCollectionById(collectionId);
    dispatch({ type: Collection_Action_Types.FETCH_ONE_COLLECTION, payload: data });
  } catch (error) {
    throw new Error('error fetching collection');
  }
};
