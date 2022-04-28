import React from 'react';
import PropTypes from 'prop-types';
import { tab } from '@testing-library/user-event/dist/tab';
import Tab from '../UI/Tab.ui';

function ProfileTabs({
  account,
  user,
  handleTabChange,
  fetchUserDrafts,
  fetchUserPosts,
  fetchUserComments,
  fetchUserCollections,
  selectedTab
}) {
  // change the ids to match tab number
  const tabs = {
    tab1: { id: 1, title: 'Account' },
    tab2: { id: 2, title: 'Posts' },
    tab3: { id: 3, title: 'Drafts' },
    tab4: { id: 4, title: 'Collections' },
    tab5: { id: 5, title: 'Comments' }
  };

  return (
    <>
      {user.id === account.id && (
        <Tab
          tab={[{ id: tabs.tab1.id, title: tabs.tab1.title }]}
          handleTabChange={handleTabChange}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
            />
          </svg>
        </Tab>
      )}

      <Tab
        key={tabs.tab2.id}
        tab={[{ id: tabs.tab2.id, title: tabs.tab2.title }]}
        handleTabChange={(e) => {
          handleTabChange(e, tabs.tab2.id);

          selectedTab !== tabs.tab2.id && fetchUserPosts();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      </Tab>
      {user.id === account.id && (
        <Tab
          tab={[{ id: tabs.tab3.id, title: tabs.tab3.title }]}
          handleTabChange={(e) => {
            handleTabChange(e, tabs.tab3.id);
            selectedTab !== tabs.tab3.id && fetchUserDrafts();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </Tab>
      )}

      <Tab
        tab={[{ id: tabs.tab4.id, title: tabs.tab4.title }]}
        handleTabChange={(e) => {
          handleTabChange(e, tabs.tab4.id);
          selectedTab !== tabs.tab4.id && fetchUserCollections();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      </Tab>
      <Tab
        tab={[{ id: tabs.tab5.id, title: tabs.tab5.title }]}
        handleTabChange={(e) => {
          handleTabChange(e, tabs.tab5.id);
          selectedTab !== tabs.tab5.id && fetchUserComments();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      </Tab>
    </>
  );
}

ProfileTabs.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    photo: PropTypes.string,
    profileCover: PropTypes.string
  }).isRequired,

  account: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    photo: PropTypes.string,
    profileCover: PropTypes.string
  }).isRequired,

  handleTabChange: PropTypes.func.isRequired,
  fetchUserDrafts: PropTypes.func.isRequired,
  fetchUserPosts: PropTypes.func.isRequired,
  fetchUserComments: PropTypes.func.isRequired,
  fecthUserCollections: PropTypes.func.isRequired
};
export default ProfileTabs;
