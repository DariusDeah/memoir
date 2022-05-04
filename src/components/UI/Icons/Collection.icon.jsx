import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Collections from '../../Collections/ColectionsList.component';
import Modal from '../Modal.ui';
import CreateCollection from '../../../Forms/CreateCollection.form';

function CollectionIcon() {
  const [modalActive, setModalActive] = useState(false);
  const { accountCollections, pending, error } = useSelector(
    (state) => state.collections
  );

  const { account, loggedIn } = useSelector((state) => state.account);
  // const collections = false;
  const closeModal = (event) => {
    event.preventDefault();
    setModalActive(!modalActive);
  };

  return (
    <div>
      <div>
        <Modal
          showModal={modalActive}
          closeModal={closeModal}
          title={undefined}
          content={undefined}
          confirmOption={undefined}
        >
          {loggedIn && accountCollections ? (
            <Collections
              collections={accountCollections}
              account={account}
              loggedIn={loggedIn}
              user={account}
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
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      </button>
    </div>
  );
}

export default CollectionIcon;
