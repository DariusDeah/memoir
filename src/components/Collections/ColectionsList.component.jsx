import React from 'react';
import { Link } from 'react-router-dom';
import { defaultButton } from '../../default.styles';
import DeleteIcon from '../UI/Icons/Delete.icon';
import useCollectionList from './collectionList.hook';

function Collections({ collections, user, addToCollection, loggedIn }) {
  const { removeCollection, collectionId, setCollectionId, formik } =
    useCollectionList();
  return (
    <article className=" rounded-xl">
      <div className="flex items-center border-b-2 border-black mb-2">
        {user && (
          <img
            src={user.photo}
            alt={user.name}
            className="w-16 h-16 rounded-full"
          />
        )}

        <div className="ml-3">
          <h5 className="text-lg font-medium ">{user.name}</h5>
          <h5 className="text-sm font-medium text-gray-500 ">
            collections:
            {collections && collections.length}
          </h5>
        </div>
      </div>
      <div className=" h-96 overflow-auto pt-4">
        <ul className="mt-4 space-y-2">
          {collections &&
            collections.map((collection) => (
              <li key={collection._id}>
                <a className="block h-full p-4 border border-gray-700 rounded-lg hover:border-pink-600 cursor-pointer p-8 space-y-2">
                  <div className="flex justify-between flex-row">
                    <Link to={`/collections/${collection._id}/view`}>
                      <button
                        type="button"
                        className={`${defaultButton.size} text-white mb-2 bg-blue-500`}
                      >
                        view
                      </button>
                    </Link>
                    <section className="p-3 border-2 border-blue-400 rounded-md">
                      <button
                        type="button"
                        onClick={() => addToCollection(collection._id)}
                        id="add-to-collection"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <label htmlFor="add-to-collection">Add</label>
                    </section>
                  </div>
                  <h5 className="font-medium text-xl ">{collection.name}</h5>
                  <form
                    className="relative z-30 flex w-full -space-x-px"
                    onSubmit={formik.handleSubmit}
                  >
                    <input
                      id="name"
                      type="text"
                      placeholder="Edit Name"
                      className="block w-full rounded-l border-gray-200 text-sm transition focus:z-10 focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onInputCapture={() => {
                        setCollectionId(collection._id);
                      }}
                    />
                    <button
                      type="submit"
                      className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded-r border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition z-40 hover:border-gray-300 hover:bg-gray-100 focus:z-10 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                      Save
                    </button>
                  </form>
                  <h5 className="font-medium ">
                    posts:
                    {collection.postIds && collection.postIds.length}
                  </h5>

                  <p className="mt-1 text-xs font-medium " />
                  <div className="my-2 border-2 border-red-500 rounded-md  w-20">
                    <label htmlFor="deleteColection">delete</label>
                    <div
                      className="inline-flex space-x-3 p-3 "
                      id="deleteCollection"
                    >
                      <DeleteIcon
                        deleteFunction={removeCollection}
                        itemId={collection._id}
                      />
                    </div>
                  </div>
                </a>
              </li>
            ))}
        </ul>
      </div>
    </article>
  );
}

export default Collections;
