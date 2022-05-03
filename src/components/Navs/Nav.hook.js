import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAccount } from '../../redux/actions/account.actions';
import { getCollections } from '../../redux/actions/collections.actions';

function useNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // @ts-ignore
  const {
    account, pending, error, loggedIn
  } = useSelector((state) => state.account);
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = (event) => {
    event.preventDefault();
    if (account) return;
    setModalActive(true);
  };
  const closeModal = (event) => {
    event.preventDefault();
    setModalActive(!modalActive);
  };
  const logout = () => {
    dispatch(logoutAccount());
  };
  useEffect(() => {
    loggedIn && dispatch(getCollections(account.id));
  }, [account]);

  return {
    isMenuOpen, setIsMenuOpen, account, error, pending, toggleModal, closeModal, logout, modalActive, setModalActive, loggedIn
  };
}

export default useNav;
