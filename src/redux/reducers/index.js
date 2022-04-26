import { combineReducers } from 'redux';
import posts from './posts';
import account from './account.reducer';
import user from './user.reducer';
// import collections from './collections'
// import user from './user'
import comments from './comment.reducer';
import followers from './followers.reducer';
// import profile from './profile'
// import profileCollections from './profileCollections'
export default combineReducers({
  posts,
  account,
  // collections,
  user,
  comments,
  // profile,
  // profileCollections
  followers
});
