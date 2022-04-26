import { Followers_Action_Types } from '../constants/action-types';

const reducer = (followers = [], action) => {
  switch (action.type) {
    case Followers_Action_Types.FetchFollowers:
      return {
        ...followers,
        followers: action.payload
      };
    case Followers_Action_Types.Add_Followers:
      return {
        ...followers,
        followers: action.payload
      };
    default:
      return followers;
  }
};
export default reducer;
