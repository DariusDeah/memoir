import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Modal({
  showModal,
  closeModal,
  title,
  content,
  confirmOption,
  children
}) {
  const [modalIsActive, setModalIsActive] = useState(showModal);
  // const toggleModal = (bool, event) => {
  //   event.preventDefault();
  //   setModalIsActive(bool);
  // };
  const closeModalFunc = (event) => {
    event.preventDefault();
    setModalIsActive(false);
    console.log('works');
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {showModal && (
        <div
          className="overflow-y-auto max-h-max  fixed inset-0 z-50 flex justify-center align-top"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="
          flex
          items-end
          justify-center
w-full
          px-4
          pt-4
          pb-20
          text-center
          sm:block sm:p-0
        "
          >
            {/* <!--This is the background that overlays when the modal is active. It  has opacity, and that's why the background looks gray.-->
              <!-----
          add this code to this very first div:

        --> */}
            <div
              className="transition-opacity fixed inset-0 bg-gray-500 bg-opacity-75"
              aria-hidden="true"
            />
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            />
            {/* <!--Modal panel : This is where you put the pop-up's content, the div on top this coment is the wrapper --> */}
            <div
              className="
            inline-block
            p-5
            overflow-hidden
            text-left
            align-bottom
            transition-all
            transform
            bg-white
            rounded-lg
            shadow-2xl
            lg:p-16
            sm:my-8 sm:align-middle sm:max-w-xl sm:w-full
          "
            >
              {title && content ? (
                <>
                  <div>
                    <div className="mt-3 text-left sm:mt-5">
                      <h1
                        className="
                  mb-8
                  text-2xl
                  font-semibold
                  leading-none
                  tracking-tighter
                  text-neutral-600
                "
                      >
                        {title}
                      </h1>
                      <p className="mx-auto text-base leading-relaxed text-gray-500">
                        {content}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 sm:flex">
                    <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                      <Link to="sign-auth">
                        <button
                          className="
                    items-center
                    block
                    px-10
                    py-4
                  text-base
                  font-medium
                  text-center text-white
                  transition
                  duration-500
                  ease-in-out
                  transform
                  bg-blue-600
                  rounded-xl
                  hover:bg-blue-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-blue-500
                  "
                          type="button"
                          onClick={closeModal}
                        >
                          {confirmOption}
                        </button>
                      </Link>
                    </div>
                    <div className="mt-3 rounded-lg sm:mt-0">
                      <button
                        className="
                  items-center
                  block
                  px-10
                  py-3.5
                  text-base
                  font-medium
                  text-center text-blue-600
                  transition
                  duration-500
                  ease-in-out
                  transform
                  border-2 border-white
                  shadow-md
                  rounded-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-gray-500
                "
                        type="button"
                        onClick={closeModal}
                      >
                        {' '}
                        Cancel{' '}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="">{children}</div>
                  <div className="mt-3 rounded-lg sm:mt-0">
                    <button
                      className="
                  items-center
                  block
                  px-10
                  py-3.5
                  text-base
                  font-medium
                  text-center text-blue-600
                  transition
                  duration-500
                  ease-in-out
                  transform
                  border-2 border-white
                  shadow-md
                  rounded-xl
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-gray-500
                "
                      type="button"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
