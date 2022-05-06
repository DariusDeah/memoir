import { combineReducers } from 'redux';
import posts from '../slices/post.slice';
import account from '../slices/account.slice';
import user from '../slices/user.slice';
import collections from '../slices/collections.slice';
// import user from './user'
import comments from '../slices/comments.slice';
import followers from './followers.reducer';
import likes from '../slices/likes.slice';
// import profile from './profile'
import profileCollections from './profileCollections.reducer';

export default combineReducers({
  posts,
  account,
  collections,
  user,
  comments,
  likes,
  // profile,
  profileCollections,
  followers
});
