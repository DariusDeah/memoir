import React, { useEffect, useState } from 'react';
import useAlert from './Alert.hook';
import FailAlert from './FailAlert.ui';
import SuccessAlert from './SuccessAlert.ui';
import { UIstyles } from './UI.syles';

function Alert({ title, message }) {
  const components = {
    Error: FailAlert,
    Success: SuccessAlert
  };
  const Component = components[title];
  const { showAlert } = useAlert();
  return (
    <div className={UIstyles.alert.position}>
      {Component && showAlert && <Component title={title} message={message} />}
    </div>
  );
}

export default Alert;
