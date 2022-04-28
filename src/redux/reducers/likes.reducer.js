import { Likes_Action_Types } from '../constants/action-types';

const reducer = (likes = [], action) => {
  console.log(action.type);
  switch (action.type) {
    case Likes_Action_Types.FETCH_LIKES:
      return { ...likes, likes: action.payload };
    default:
      return likes;
  }
};
export default reducer;
