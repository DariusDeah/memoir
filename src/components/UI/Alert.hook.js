import React, { useState } from 'react';

function useAlert() {
  const [showAlert, setShowAlert] = useState(true);
  setTimeout(() => {
    setShowAlert(false);
  }, 4500);
  return { showAlert };
}

export default useAlert;
