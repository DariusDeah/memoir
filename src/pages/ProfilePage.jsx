import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Post from '../components/Posts/Post.component';
import ProfileInfo from '../components/Profile/ProfileInfo.component';
import ProfileStats from '../components/Profile/ProfileStats.component';
import ProfileTabs from '../components/Profile/ProfileTabs.component';
import { getComments } from '../redux/actions/comments.actions';
import { getDraftPosts, getPosts } from '../redux/actions/posts.actions';
import { getUser } from '../redux/actions/user.actions';
import Comment from '../components/Comments/Comment.component';
import { userApi } from '../api/User.api';
import {
  getUserFollowers,
  getUserFollowings,
  followUser,
  unfollowUser
} from '../redux/actions/followers.actions';
import { getUserCollections } from '../redux/actions/collections.actions';
import Collections from '../components/Collections/ColectionsList.component';

function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState(2);
  console.log({ selectedTab });
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { account, loggedIn } = useSelector((state) => state.account);
  const { posts } = useSelector((state) => state.posts);
  const { user, followers, following, followingData } = useSelector(
    (state) => state.user
  );
  const { comments } = useSelector((state) => state.comments);
  const { userCollections } = useSelector((state) => state.collections);
  const fetchUserPosts = () => {
    userId && dispatch(getPosts(`?creatorId=${userId}`));
  };
  console.log({ userCollections });
  const fetchUserDrafts = () => {
    dispatch(getDraftPosts());
  };

  const fetchUserComments = () => {
    dispatch(getComments(`?creatorId=${userId}`));
  };
  const fetchFollowers = () => {
    dispatch(getUserFollowers(userId));
  };
  const fetchFollowing = () => {
    dispatch(getUserFollowings(userId));
  };
  const fetchUserCollections = () => {
    dispatch(getUserCollections(userId));
  };
  const handleTabChange = (e, id) => {
    e.preventDefault();
    setSelectedTab(id);
  };

  const components = {
    1: ProfileInfo,
    2: Post,
    3: Post,
    4: Collections,
    5: Comment
  };
  const Component = components[selectedTab];
  useEffect(() => {
    dispatch(getUser(userId));
    fetchUserPosts();
    fetchFollowers();
    fetchFollowing();
    fetchUserCollections();
  }, [dispatch, userId]);

  return (
    <>
      {user && account && (
        <>
          <div className="flex  flex-col items-center justify-center  md:px-2  bg-white rounded-lg shadow-lg max-w-7xl  mx-auto">
            <div
              className="lg:w-full w-11/12 md:h-80 h-36 bg-gray-300 bg-center bg-cover md:rounded-lg rounded-md shadow-md"
              style={{
                backgroundImage: `url(${user.coverImg})`
              }}
            />

            <div className="flex  md:-mt-20 overflow-hidden  -mt-11  justify-center">
              <img
                className="md:w-40 md:h-40 w-20 h-20
           z-20 rounded-full border-2 border-white"
                src={user.photo}
                alt=""
              />
            </div>
            <h1
              className="
          font-semibold"
            >
              {user.name}
            </h1>
            {/* <p>{user.website}</p> */}
            <p>{user.bio}</p>
            {user && followingData && (
              <ProfileStats
                userPostsLength={posts.length}
                userFollowersLength={followers.length}
                userCollectionsLength={userCollections.length}
                userFollowingLength={following.length}
              />
            )}
            {loggedIn && account.id !== user.id && (
              <div className="inline-flex items-center -space-x-px text-xs rounded-md">
                {followers &&
                followers.filter((x) => x.followerId === account.id).length ? (
                  <div className=" inline-flex ">
                    <button
                      className="px-2 w-full py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform  rounded bg-violet-400 focus:outline-none flex"
                      type="button"
                      onClick={() => {
                        dispatch(unfollowUser(userId));
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                      following
                    </button>
                  </div>
                ) : (
                  <button
                    className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                    type="button"
                    onClick={() => {
                      dispatch(followUser(userId));
                    }}
                  >
                    Follow
                  </button>
                )}
                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                  Report
                </button>
              </div>
            )}

            <div className="flex border-b pt-3 border-gray-200 dark:border-gray-700  md:w-full justify-center px-0">
              <ProfileTabs
                account={account}
                user={user}
                handleTabChange={handleTabChange}
                fetchUserPosts={fetchUserPosts}
                fetchUserDrafts={fetchUserDrafts}
                fetchUserComments={fetchUserComments}
                fetchUserCollections={fetchUserCollections}
                selectedTab={selectedTab}
              />
            </div>
          </div>
          <div className=" max-w-7xl  mx-auto   md:px-2 card">
            <Component
              userPosts={posts}
              user={user}
              commentData={comments}
              collections={userCollections}
              account={account}
              loggedIn={loggedIn}
            />
          </div>
        </>
      )}
    </>
  );
}

export default ProfilePage;
