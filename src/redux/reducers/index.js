import { combineReducers } from 'redux';
import posts from './posts';
import account from '../slices/account.slice';
import user from './user.reducer';
import collections from './collections.reducer';
// import user from './user'
import comments from './comment.reducer';
import followers from './followers.reducer';
import likes from './likes.reducer';
// import profile from './profile'
import profileCollections from './profileCollections.reducer';
import collection from './collection.reducer';

export default combineReducers({
  posts,
  account,
  collections,
  user,
  comments,
  likes,
  collection,
  // profile,
  profileCollections,
  followers
});
