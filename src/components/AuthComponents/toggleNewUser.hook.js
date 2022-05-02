import { useState } from 'react';

function useToggleNewUser() {
  const [isNewUser, setIsNewUser] = useState(false);

  const toggleNewUser = (bool) => {
    setIsNewUser(bool);
  };

  return { isNewUser, toggleNewUser };
}

export default useToggleNewUser;
