import React, { useState } from 'react';

function SearchBar({ searchFunction }) {
  const [searchInput, setSearchInput] = useState('');
  return (
    <div className="relative z-0 flex w-full space-x-6 md:px-20 px-3 ">
      <div className="relative w-full h-fit flex flex-row">
        <svg
          className="pointer-events-none absolute inset-y-0 left-0 h-full w-8 stroke-gray-400 pl-2.5"
          viewBox="0 0 256 256"
          aria-hidden="true"
        >
          <circle
            cx="116"
            cy="116"
            r="84"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <line
            x1="175.4"
            y1="175.4"
            x2="224"
            y2="224"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </svg>
        <label htmlFor="search-button" className="sr-only">
          Search
        </label>
        <input
          id="search-button"
          type="search"
          placeholder="Search posts..."
          className="block w-full rounded-l-md border-gray-200 pl-10 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75 h-10 py-8"
          value={searchInput}
          onInputCapture={(e) => setSearchInput(e.target.value)}
        />
        <button
          type="submit"
          className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded-r border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:z-10 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
          onClick={() => searchFunction(searchInput)}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
