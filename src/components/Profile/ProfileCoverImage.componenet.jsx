import React from 'react';

// eslint-disable-next-line react/prop-types
function ProfileCoverImage({ ...profileCoverImg }) {
  return (
    <img
      className="lg:w-full w-11/12 md:h-80 h-36 bg-gray-300 bg-center bg-cover md:rounded-lg rounded-md shadow-md"
      style={{
        backgroundImage: `"url(${profileCoverImg})"`
      }}
      alt="profile background"
    />
  );
}

export default ProfileCoverImage;
