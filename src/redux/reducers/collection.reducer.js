import { Collection_Action_Types } from '../constants/action-types';

const reducer = (collection = [], action) => {
  switch (action.type) {
    case Collection_Action_Types.FETCH_ONE_COLLECTION:
      return {
        ...collection,
        collection: action.payload
      };
    default:
      return collection;
  }
};
export default reducer;
