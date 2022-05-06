import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../UI/Avatar.ui';
import CollectionIcon from '../UI/Icons/Collection.icon';
import Spinner from '../UI/Icons/spinner.ui';
import Modal from '../UI/Modal.ui';
import { NavStyles } from './Nav.styles';

function FullScreenNav({
  account,
  modalActive,
  closeModal,
  pending,
  error,
  logout,
  loggedIn,
  routeToAuthPage
}) {
  return (
    <>
      <ul className="flex items-center hidden space-x-8 lg:flex">
        <Link to="explore">
          <li>
            <p
              aria-label="Explore"
              title="Explore"
              className={NavStyles.navLinks}
            >
              Explore 🌐
            </p>
          </li>
        </Link>
        <li onClick={routeToAuthPage}>
          <Link to="create-post">
            <p
              aria-label="Our product"
              title="Create a post"
              className={NavStyles.navLinks}
            >
              Create+
            </p>
          </Link>
          {!loggedIn && modalActive && (
            <Modal
              confirmRoute="sign-auth"
              showModal
              title="Not So Fast.."
              content="You must be logged in to create a post, \
                  if you're a new user then create an account now and join the fun! "
              confirmOption="Create account!"
              closeModal={(e) => closeModal(e)}
            />
          )}
        </li>
        <li>
          <Link to="search">
            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              className={NavStyles.navLinks}
            >
              Search
            </a>
          </Link>
        </li>
        <li>
          <Link to="feature-request">
            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              className="read-only disabled:text-slate-500"
            >
              Features+
            </a>
          </Link>
        </li>
      </ul>
      <a
        href="/"
        aria-label="Company"
        title="Company"
        className="inline-flex items-center lg:mx-auto"
      >
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
          Memoir <span className="text-red-500">.</span>
        </span>
      </a>
      <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
        {account && loggedIn && (
          <>
            <li>
              <p className="font-semibold">@{account.name}</p>
            </li>
            <li className="">
              <Avatar
                photo={account.photo}
                id={account.id}
                styles="w-12 h-12"
              />
            </li>
            <li>
              <button
                className="font-semibold cursor-pointer"
                onClick={logout}
                type="button"
              >
                Logout
              </button>
            </li>
            <li>
              <CollectionIcon />
            </li>
          </>
        )}
        {!loggedIn && !pending && (
          <li>
            <Link to="sign-auth">
              <p
                aria-label="Sign in"
                title="Sign in"
                className={NavStyles.navLinks}
              >
                Sign in
              </p>
            </Link>
          </li>
        )}
        {pending && <Spinner />}
      </ul>
    </>
  );
}

export default FullScreenNav;
