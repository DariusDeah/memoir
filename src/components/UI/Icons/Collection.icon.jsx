import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Collections from '../../Collections/ColectionsList.component';
import Modal from '../Modal.ui';

function CollectionIcon() {
  const [modalActive, setModalActive] = useState(false);
  const collections = useSelector((state) => state.collections.collections);
  const account = useSelector((state) => state.account.account);
  // const collections = false;
  console.log(collections);
  const closeModal = (event) => {
    event.preventDefault();
    console.log('works');
    setModalActive(!modalActive);
    console.log(modalActive);
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
          {collections && collections.length ? (
            <Collections collections={collections} user={account} />
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
          <div className="relative my-3">
            <input
              className="w-full py-4 pl-3 pr-16 text-sm border-2 border-gray-200 rounded-lg"
              id="createCollection"
              type="createCollection"
              placeholder="New Collection"
            />

            <button
              className="absolute p-2 text-white -translate-y-1/2 bg-blue-600 rounded-full top-1/2 right-4"
              type="button"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
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
