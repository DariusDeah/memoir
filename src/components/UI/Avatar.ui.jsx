import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Avatar({ photo, id, styles }) {
  return (
    <Link to={`/profile/${id}`}>
      <img
        src={photo}
        alt="user avatar"
        className={`rounded-full hover:cursor-pointer ${styles} `}
      />
    </Link>
  );
}
Avatar.propTypes = {
  photo: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired
};

export default Avatar;
