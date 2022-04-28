import { Collection_Action_Types } from '../constants/action-types';

const reducer = (collections = [], action) => {
  switch (action.type) {
    case Collection_Action_Types.Fetch_Collection:
      return {
        ...collections,
        collections: action.payload
      };
    case Collection_Action_Types.SET_COLLECTION:
      return collections;
    default:
      return collections;
  }
};
export default reducer;
