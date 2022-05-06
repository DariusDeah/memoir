import React, { useEffect, useState } from 'react';

function useAlert() {
  const [showAlert, setShowAlert] = useState(true);

  setTimeout(() => {
    setShowAlert(false);
  }, 4500);
  // useEffect(() => () => {
  //   setShowAlert(true);
  // }, [showAlert]);

  return { showAlert };
}

export default useAlert;
