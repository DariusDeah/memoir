/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

function Tags({ tags }) {
  return (
    <>
      {tags &&
        tags.map((tag) => (
          <p className="px-3 py-1 rounded-sm hover:underline bg-violet-600 text-white">
            {tag}
          </p>
        ))}
    </>
  );
}

// Tags.propTypes = {
//   tags: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired
// };
export default Tags;
