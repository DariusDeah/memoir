import { Account_Action_Types } from '../constants/action-types';

const reducer = (account = {}, action) => {
  switch (action.type) {
    case Account_Action_Types.FETCH_Account:
      return {
        ...account,
        account: {
          name: action.payload.user.name,
          email: action.payload.user.email,
          photo: action.payload.user.photo,
          profileCover: action.payload.user.coverImg,
          // eslint-disable-next-line no-underscore-dangle
          id: action.payload.user._id,
        },
      };
    case Account_Action_Types.SET_Account:
      return account;
    default:
      return account;
  }
};

export default reducer;
