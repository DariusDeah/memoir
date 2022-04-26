import React from 'react';
import PropTypes from 'prop-types';

function ProfileStats({ userPostsLength, userFollowersLength }) {
  return (
    <section className="px-4 py-12 mx-auto max-w-4xl">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-6 card">
          <div className="flex items-start justify-between">
            <h2 className="mb-2 font-mono text-2xl font-light leading-none text-gray-900 truncate">
              {userPostsLength}
            </h2>
            <h2 className="mb-2 font-mono text-2xl font-light leading-none text-gray-900 truncate">
              {userFollowersLength}
            </h2>
          </div>
          <p className="text-sm leading-none text-gray-600">Posts</p>
          <p className="text-sm leading-none text-gray-600">Followers</p>
        </div>
      </div>
    </section>
  );
}
ProfileStats.propTypes = {
  userPostsLength: PropTypes.number.isRequired
};

export default ProfileStats;
