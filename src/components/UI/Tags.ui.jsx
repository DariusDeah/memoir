/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { getPosts } from '../../redux/actions/posts.actions';
// import PropTypes from 'prop-types';

function Tags({ tags }) {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const searchByTag = (tag) => {
    dispatch(getPosts(`?tags=${tag}`));
    nav('/search');
  };
  return (
    tags &&
    tags.map((tag) => (
      <p
        className="px-3 py-1 rounded-sm hover:underline bg-violet-600 text-white"
        onClick={() => searchByTag(tag)}
      >
        {tag}
      </p>
    ))
  );
}

// Tags.propTypes = {
//   tags: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired
// };
export default Tags;
// function useNav() {
//   throw new Error('Function not implemented.');
// }
