import React from 'react';
import { Link } from 'react-router-dom';
import Alert from '../UI/Alert.ui';
import Avatar from '../UI/Avatar.ui';
import CollectionIcon from '../UI/Icons/Collection.icon';
import Spinner from '../UI/Icons/spinner.ui';
import Modal from '../UI/Modal.ui';
import FullScreenNav from './FullScreenNav.component';
import MobileNav from './MobileNav.component';
import useNav from './Nav.hook';
import { NavStyles } from './Nav.styles';

function Nav() {
  const {
    isMenuOpen,
    setIsMenuOpen,
    account,
    pending,
    error,
    toggleModal,
    closeModal,
    logout,
    modalActive,
    setModalActive,
    loggedIn
  } = useNav();
  return (
    <div className=" px-4 py-5 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <Alert title={error.name} message={error.message} />
      <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
        <FullScreenNav
          account={account}
          pending={pending}
          error={error}
          closeModal={closeModal}
          modalActive={modalActive}
          logout={logout}
          loggedIn={loggedIn}
        />
        <MobileNav
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          toggleModal={toggleModal}
          closeModal={closeModal}
          modalActive={modalActive}
          account={account}
          loggedIn={loggedIn}
        />
      </div>
    </div>
  );
}
export default Nav;
