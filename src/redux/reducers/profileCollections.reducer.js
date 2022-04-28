import { Profile_Collection_Action_Types } from '../constants/action-types';

const reducer = (profileCollections = [], action) => {
  console.log(action.type);
  switch (action.type) {
    case Profile_Collection_Action_Types.Fetch_Profile_Collections:
      return { ...profileCollections, collections: action.payload };
    default:
      return profileCollections;
  }
};
export default reducer;
