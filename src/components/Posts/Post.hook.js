import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { postApi } from '../../api/Post.api';
import { getPost } from '../../redux/actions/posts.actions';

function usePost() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    account, loggedIn
  } = useSelector((state) => state.account);
  const items = [
    {
      id: 1,
      title: 'edit',
      action: 'editPost',
      type: 'Edit'
    },
    {
      id: 2,
      title: 'delete',
      action: 'removePost',
      type: 'Delete'
    },
    {
      id: 3,
      title: 'make private',
      action: 'makePostPrivate',
      type: 'MakePrivate'
    },
    {
      id: 4,
      title: 'make public',
      action: 'makePostPublic',
      type: 'MakePublic'
    }
  ];
  const deletePost = (postId) => {
    postApi.deletePost(postId);
  };
  const editPost = (postId) => {
    dispatch(getPost(postId));
    navigate(`/posts/${postId}/edit`);
  };
  const makePrivateFunction = (postId) => {
    postApi.editPost(postId, { status: 'draft' });
  };
  const makePublicFunction = (postId) => {
    postApi.editPost(postId, { status: 'completed' });
  };

  // TODO when clicking on a post pic it should take you to the post no matter what url you are at
  const { posts, pending, error } = useSelector((state) => state.posts);
  return {
    account, pending, error, loggedIn, items, deletePost, editPost, makePrivateFunction, makePublicFunction, posts
  };
}

export default usePost;
