import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function useToggleNewUser() {
  const routeHome = useNavigate();
  const [isNewUser, setIsNewUser] = useState(false);
  const { account, error, loggedIn } = useSelector((state) => state.account);
  const toggleNewUser = (bool) => {
    setIsNewUser(bool);
  };
  if (loggedIn) {
    routeHome('/');
  }
  return { isNewUser, toggleNewUser };
}

export default useToggleNewUser;
