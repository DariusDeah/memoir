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
import { getUserFollowers } from '../redux/actions/followers.actions';

function ProfilePage() {
  const [selectedTab, setSelectedTab] = useState(2);
  console.log({ selectedTab });
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { account } = useSelector((state) => state.account);
  const userPosts = useSelector((state) => state.posts.posts);
  const { user } = useSelector((state) => state.user);
  const comments = useSelector((state) => state.comments.comments);
  const userFollowers = useSelector((state) => state.followers.followers);
  console.log(userFollowers);
  const fetchUserPosts = () => {
    userId && dispatch(getPosts(`?creatorId=${userId}`));
  };

  const fetchUserDrafts = () => {
    dispatch(getDraftPosts());
  };

  const fetchUserComments = () => {
    dispatch(getComments(`?creatorId=${userId}`));
  };
  const fetchFollowers = () => {
    dispatch(getUserFollowers(userId));
  };
  const fetchFollowing = async () => {
    await userApi.getUserFollowings(userId);
  };
  const handleTabChange = (e, id) => {
    e.preventDefault();
    console.log({ id });
    setSelectedTab(id);
  };
  const followUser = async () => {
    await userApi.followUser(userId);
  };
  const components = {
    1: ProfileInfo,
    2: Post,
    3: Post,
    4: 'Collections',
    5: Comment
  };
  const Component = components[selectedTab];
  useEffect(() => {
    dispatch(getUser(userId));
    fetchUserPosts();
    fetchFollowers();
    fetchFollowing();
  }, [dispatch, userId]);

  return (
    <>
      {user && account && (
        <>
          <div className="flex  flex-col items-center justify-center  md:px-2  bg-white rounded-lg shadow-lg max-w-7xl  mx-auto">
            <div
              className="lg:w-full w-11/12 md:h-80 h-36 bg-gray-300 bg-center bg-cover md:rounded-lg rounded-md shadow-md"
              style={{
                backgroundImage: `url(${user.profileCover})`
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
            {userPosts && userFollowers && (
              <ProfileStats
                userPostsLength={userPosts.length}
                userFollowersLength={userFollowers.length}
              />
            )}
            {account.id !== user.id && (
              <div>
                {userFollowers &&
                userFollowers.filter((x) => x.followerId === account.id)
                  .length ? (
                  <button
                    className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform  rounded bg-violet-400 focus:outline-none"
                    type="button"
                    onClick={followUser}
                  >
                    following
                  </button>
                ) : (
                  <button
                    className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                    type="button"
                    onClick={followUser}
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
              />
            </div>
          </div>
          <div className=" max-w-7xl  mx-auto   md:px-2 card">
            <Component
              userPosts={userPosts}
              user={user}
              commentData={comments}
            />
          </div>
        </>
      )}
    </>
  );
}

export default ProfilePage;
