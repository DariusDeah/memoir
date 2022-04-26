import { User_Action_Types } from '../constants/action-types';

const reducer = (user = {}, action) => {
  switch (action.type) {
    case User_Action_Types.Fetch_User:
      return {
        ...user,
        user: {
          name: action.payload.name,
          bio: action.payload.bio,
          email: action.payload.email,
          photo: action.payload.photo,
          profileCover: action.payload.coverImg,
          // eslint-disable-next-line no-underscore-dangle
          id: action.payload._id,
        },
      };
    case User_Action_Types.SET_User:
      return user;
    default:
      return user;
  }
};
export default reducer;
