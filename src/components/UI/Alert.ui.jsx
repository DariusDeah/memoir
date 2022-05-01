import React, { useEffect, useState } from 'react';
import FailAlert from './FailAlert.ui';
import SuccessAlert from './SuccessAlert.ui';
import { UIstyles } from './UI.syles';

function Alert({ title, message }) {
  const [showAlert, setShowAlert] = useState(true);
  const components = {
    Error: FailAlert,
    Success: SuccessAlert
  };
  const Component = components[title];
  setTimeout(() => {
    setShowAlert(false);
  }, 3500);

  return (
    <div className={UIstyles.alert.position}>
      {Component && showAlert && <Component title={title} message={message} />}
    </div>
  );
}

export default Alert;
