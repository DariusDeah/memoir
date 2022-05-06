import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logoutAccount } from '../../redux/actions/account.actions';
import { getAccountCollections } from '../../redux/actions/collections.actions';

function useNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  // @ts-ignore
  const {
    account, pending, error, loggedIn
  } = useSelector((state) => state.account);
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const routeToAuthPage = () => {
    if (!loggedIn) {
      navigate('sign-auth');
    }
  };
  const toggleModal = (event) => {
    event.preventDefault();
    if (!loggedIn) {
      setModalActive(true);
    }
  };
  const closeModal = (event) => {
    event.preventDefault();
    setModalActive(!modalActive);
  };
  const logout = () => {
    dispatch(logoutAccount());
  };
  useEffect(() => {
    loggedIn && dispatch(getAccountCollections(account.id));
  }, [account]);

  return {
    isMenuOpen, setIsMenuOpen, account, error, pending, toggleModal, closeModal, logout, modalActive, setModalActive, loggedIn, routeToAuthPage
  };
}

export default useNav;
