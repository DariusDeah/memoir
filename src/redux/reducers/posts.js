import { Post_Action_Types } from '../constants/action-types';

const reducer = (posts = [], action) => {
  switch (action.type) {
    case Post_Action_Types.FETCH_ALL_Posts:
      return {
        ...posts,
        posts: action.payload,
      };
    case Post_Action_Types.FETCH_ONE_Post:
      return {
        ...posts,
        posts: action.payload,
      };
    case Post_Action_Types.FETCH_ALL_Draft_Posts:
      return {
        ...posts,
        posts: action.payload,
      };
    case Post_Action_Types.DELETE:
      return {
        ...posts,
        posts: action.payload
      };
    default:
      return posts;
  }
};
export default reducer;
