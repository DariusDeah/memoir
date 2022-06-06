import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../UI/Avatar.ui';
import Modal from '../UI/Modal.ui';
import { NavStyles } from './Nav.styles';

function MobileNav({
  isMenuOpen,
  setIsMenuOpen,
  toggleModal,
  modalActive,
  closeModal,
  account,
  loggedIn,
  routeToAuthPage
}) {
  return (
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
                  <Link to="/explore">
                    <a
                      href="/"
                      aria-label="Our product"
                      title="Our product"
                      className={NavStyles.navLinks}
                    >
                      Explore🌐
                    </a>
                  </Link>
                </li>
                <li onClick={routeToAuthPage}>
                  <Link to="create-post">
                    <p
                      aria-label="create"
                      title="Our product"
                      className={NavStyles.navLinks}
                      onClick={toggleModal}
                    >
                      Create+
                    </p>
                  </Link>
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
                      className={NavStyles.navLinks}
                    >
                      Features+
                    </a>
                  </Link>
                </li>
                {/* FIXME change this logic */}
                {account && loggedIn ? (
                  <li>
                    <p className="font-semibold">@{account.name}</p>
                    <Avatar
                      photo={account.photo}
                      id={account.id}
                      styles="w-12 h-12"
                    />
                  </li>
                ) : (
                  <li>
                    <Link to="sign-auth">
                      <a
                        href="/"
                        aria-label="Sign in"
                        title="Sign in"
                        className={NavStyles.navLinks}
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
  );
}

export default MobileNav;
