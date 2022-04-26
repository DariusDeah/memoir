import { Collection_Action_Types } from '../constants/action-types';

const reducer = (profileCollections = [], action) => {
  console.log(action.type);
  switch (action.type) {
    case Collection_Action_Types.Fetch_Collection:
      return { ...profileCollections, profileCollections: action.payload };
    case Collection_Action_Types.SET_COLLECTION:
      return { ...profileCollections, profileCollections: action.payload };
    default:
      return profileCollections;
  }
};
export default reducer;
