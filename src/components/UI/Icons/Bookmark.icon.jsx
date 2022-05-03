import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Collections from '../../Collections/ColectionsList.component';
import Modal from '../Modal.ui';
import { collectionApi } from '../../../api/collections.api';
import CreateCollection from '../../../Forms/CreateCollection.form';

function Bookmark({ postId }) {
  const [modalActive, setModalActive] = useState(false);
  const collections = useSelector((state) => state.collections.collections);
  const { account, loggedIn } = useSelector((state) => state.account);
  const closeModal = (event) => {
    event.preventDefault();
    setModalActive(!modalActive);
  };
  const addPostToCollection = async (collectionId) => {
    await collectionApi.addPostToCollection(collectionId, postId);
  };
  return (
    <>
      <div>
        <Modal
          showModal={modalActive}
          closeModal={closeModal}
          title={undefined}
          content={undefined}
          confirmOption={undefined}
        >
          {collections ? (
            <Collections
              collections={collections}
              user={account}
              addToCollection={addPostToCollection}
              loggedIn={loggedIn}
            />
          ) : (
            <div className="text-center">
              <img
                src="https://www.hyperui.dev/photos/confused-travolta.gif"
                alt="John Travolta confused"
                className="object-cover w-full h-64 rounded-lg"
              />

              <p className="mt-6 text-gray-500">
                Hmm ... nothing here, try creating a collection first
              </p>
            </div>
          )}
          <CreateCollection />
        </Modal>
      </div>
      <button type="button" onClick={() => setModalActive(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6  cursor:pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      </button>
    </>
  );
}

export default Bookmark;
