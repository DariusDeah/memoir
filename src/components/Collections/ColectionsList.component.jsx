import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCollections } from '../../redux/actions/collections.actions';

function Collections({ collections, user }) {
  return (
    <article className=" rounded-xl">
      {user && (
        <>
          <div className="flex items-center border-b-2 border-black">
            <img
              src={user.photo}
              alt={user.name}
              className="w-16 h-16 rounded-full"
            />

            <div className="ml-3">
              <h5 className="text-lg font-medium ">{user.name}</h5>
              <h5 className="text-sm font-medium text-gray-500 ">
                collections:
                {collections && collections.length}
              </h5>
            </div>
          </div>
          <div className=" h-56 overflow-auto pt-4">
            <ul className="mt-4 space-y-2">
              {collections &&
                collections.map((collection) => (
                  <li>
                    <a
                      className="block h-full p-4 border border-gray-700 rounded-lg hover:border-pink-600 cursor-pointer"
                      type="button"
                    >
                      <h5 className="font-medium ">{collection.name}</h5>

                      <p className="mt-1 text-xs font-medium " />
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </>
      )}
    </article>
  );
}

export default Collections;
