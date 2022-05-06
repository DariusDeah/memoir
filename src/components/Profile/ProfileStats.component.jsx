import React from 'react';
import PropTypes from 'prop-types';

function ProfileStats({
  userPostsLength,
  userFollowersLength,
  userCollectionsLength,
  userFollowingLength
}) {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            {userPostsLength}
          </h6>
          <p className="font-bold">Posts</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            {userCollectionsLength}
          </h6>
          <p className="font-bold">Collections</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            {userFollowersLength}
          </h6>
          <p className="font-bold">Followers</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            {userFollowingLength}
          </h6>
          <p className="font-bold">Following</p>
        </div>
      </div>
    </div>
  );
}
ProfileStats.propTypes = {
  userPostsLength: PropTypes.number.isRequired,
  userCollectionsLength: PropTypes.number.isRequired,
  userFollowersLength: PropTypes.number.isRequired,
  userFollowingLength: PropTypes.number.isRequired
};

export default ProfileStats;
