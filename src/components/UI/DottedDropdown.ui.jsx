import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DottedSettingsIcon from './Icons/DottedSettings.icon';

function DottedDropdown({
  items,
  editFunction,
  deleteFunction,
  itemId,
  makePrivateFunction,
  makePublicFunction
}) {
  const [dropdownActive, setDropdownActive] = useState(false);
  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownActive(!dropdownActive);
  };
  const toggleFunction = (type, action) => {
    console.log({ action });
    if (!action) return;

    const selectFunction = {
      Edit: {
        editPost: () => {
          editFunction(itemId);
        },
        editComment: () => {
          editFunction(itemId);
        }
      },
      Delete: {
        removePost: () => {
          deleteFunction(itemId);
        },
        removeComment: () => {
          deleteFunction(itemId);
        }
      },
      MakePrivate: {
        makePostPrivate: () => {
          makePrivateFunction(itemId);
        }
      },
      MakePublic: {
        makePostPublic: () => {
          makePublicFunction(itemId);
        }
      }
    };
    selectFunction[type][action]();
  };
  return (
    <div className="relative inline-block ">
      {/* <!-- Dropdown toggle button --> */}
      <button
        className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md text-white focus:border-blue-500 focus:ring-opacity-40 focus:ring-opacity-40 focus:ring-blue-300 focus:ring-blue-400 focus:ring  focus:outline-none"
        onClick={toggleDropdown}
        type="button"
      >
        <DottedSettingsIcon />
      </button>
      {dropdownActive && (
        <div className="absolute  right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
          {items.map((item) => (
            <>
              <button
                className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
                key={item.id}
                type="button"
                onClick={() => {
                  toggleFunction(item.type, item.action);
                }}
              >
                {item.title}
              </button>

              <hr className="border-gray-200 dark:border-gray-700 " />
            </>
          ))}
        </div>
      )}
    </div>
  );
}

DottedDropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
  deleteFunction: PropTypes.func.isRequired
  // itemId: PropTypes.number.isRequired
  // editFunction: PropTypes.func
};
export default DottedDropdown;
