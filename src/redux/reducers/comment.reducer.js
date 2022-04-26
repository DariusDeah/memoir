import { Comment_Action_Types } from '../constants/action-types';

const reducer = (comments = [], action) => {
  switch (action.type) {
    case Comment_Action_Types.Fetch_Comments:
      return {
        ...comments,
        comments: action.payload
      };
    case Comment_Action_Types.Create_Comment:
      return {
        ...comments,
        comments: action.payload
      };
    default:
      return comments;
  }
};
export default reducer;
