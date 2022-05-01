import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { accountApi } from '../../api/Account.api';
import { logoutAccount } from '../../redux/actions/account.actions';
import { getCollections } from '../../redux/actions/collections.actions';
import Alert from '../UI/Alert.ui';
import Avatar from '../UI/Avatar.ui';
import FailAlert from '../UI/FailAlert.ui';
import CollectionIcon from '../UI/Icons/Collection.icon';
import Spinner from '../UI/Icons/spinner.ui';
import Modal from '../UI/Modal.ui';
import SuccessAlert from '../UI/SuccessAlert.ui';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // @ts-ignore
  const { account, pending, error, loginError } = useSelector(
    (state) => state.account
  );
  const state = useSelector((state) => state);
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = (event) => {
    event.preventDefault();
    if (account) return;
    setModalActive(true);
    console.log(modalActive);
  };
  const closeModal = (event) => {
    event.preventDefault();
    console.log('works');
    setModalActive(!modalActive);
    console.log(modalActive);
  };
  // useEffect(() => {
  //   dispatch(getCollections(account.id));
  // }, [account]);
  if (loginError) {
    console.log(error);
  }
  const logout = () => {
    dispatch(logoutAccount());
  };
  return (
    <div className=" px-4 py-5 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      {loginError && <Alert title={error.name} message={error.message} />}
      {account.auth && !loginError && !pending && (
        <Alert title="Success" message="Login Successful" />
      )}
      <div className="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <Link to="explore">
            <li>
              <p
                aria-label="Explore"
                title="Explore"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400 cursor-pointer"
              >
                Explore 🌐
              </p>
            </li>
          </Link>
          <li>
            <Link to="create-post">
              <p
                aria-label="Our product"
                title="Create a post"
                className="font-medium tracking-wide hover:cursor-pointer text-gray-700 transition-colors duration-400 hover:text-purple-400"
              >
                Create+
              </p>
            </Link>
            {!account && modalActive ? (
              <Modal
                confirmRoute="sign-auth"
                showModal
                title="Not So Fast.."
                content="You must be logged in to create a post, \
                  if you're a new user then create an account now and join the fun! "
                confirmOption="Create account!"
                closeModal={(e) => closeModal(e)}
              />
            ) : (
              ''
            )}
          </li>
          <li>
            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Search
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Product pricing"
              title="Product pricing"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              Features+
            </a>
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
          {account && account.auth && !pending && (
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
          {error && !account.auth && (
            <li>
              <Link to="sign-auth">
                <p
                  aria-label="Sign in"
                  title="Sign in"
                  className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Sign in
                </p>
              </Link>
            </li>
          )}
          {pending && <Spinner />}
        </ul>
        <div className="ml-auto lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
            type="button"
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Memoir
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                      type="button"
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Explore🌐
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        onClick={toggleModal}
                      >
                        Create+
                        {modalActive ? (
                          <Modal
                            showModal
                            title="Not So Fast.."
                            content="You must be logged in to create a post, if you're a new user then create an account now and join the fun! "
                            confirmOption="Create account!"
                            closeModal={(e) => closeModal(e)}
                          />
                        ) : (
                          ''
                        )}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Search
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Features+
                      </a>
                    </li>
                    {account ? (
                      <li>
                        <p className="font-semibold">@{account.name}</p>
                        <Avatar photo={account.photo} id={account.id} />
                      </li>
                    ) : (
                      <li>
                        <Link to="sign-auth">
                          <a
                            href="/"
                            aria-label="Sign in"
                            title="Sign in"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Sign in
                          </a>
                        </Link>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Nav;
