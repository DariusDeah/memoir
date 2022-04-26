import React from 'react';
import PropTypes from 'prop-types';
import Tab from '../UI/Tab.ui';

function ProfileTabs({
  account,
  user,
  handleTabChange,
  fetchUserDrafts,
  fetchUserPosts,
  fetchUserComments
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
        />
      )}

      <Tab
        tab={[{ id: tabs.tab2.id, title: tabs.tab2.title }]}
        handleTabChange={(e) => {
          handleTabChange(e, tabs.tab2.id);
          fetchUserPosts();
        }}
      />
      {user.id === account.id && (
        <Tab
          tab={[{ id: tabs.tab3.id, title: tabs.tab3.title }]}
          handleTabChange={(e) => {
            handleTabChange(e, tabs.tab3.id);
            fetchUserDrafts();
          }}
        />
      )}

      <Tab
        tab={[{ id: tabs.tab4.id, title: tabs.tab4.title }]}
        handleTabChange={handleTabChange}
      />
      <Tab
        tab={[{ id: tabs.tab5.id, title: tabs.tab5.title }]}
        handleTabChange={(e) => {
          handleTabChange(e, tabs.tab5.id);
          fetchUserComments();
        }}
      />
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
  fetchUserComments: PropTypes.func.isRequired
};
export default ProfileTabs;
