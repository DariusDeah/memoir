import { accountApi } from '../../api/Account.api';
import { Account_Action_Types } from '../constants/action-types';

export const getAccount = () => async (dispatch) => {
  const { data } = await accountApi.refreshAccount();
  dispatch({ type: Account_Action_Types.FETCH_Account, payload: data });
};
// export const createAccount = (accountData) => async (dispatch) => {
//   const { data } = await accountApi.creatAccount(accountData)
//   dispatch({type:Account_Action_Types.SET_Account, payload: data})
// }
