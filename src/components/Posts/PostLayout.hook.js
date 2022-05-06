import React from 'react';
import { useSelector } from 'react-redux';

function usePostLayout() {
  const {
    post, pending, error, postData
  } = useSelector((state) => state.posts);
  const { account, loggedIn } = useSelector((state) => state.account);
  const { likes, likesData } = useSelector((state) => state.likes);
  const { comments, data } = useSelector((state) => state.comments);
  return {
    post, pending, error, likes, account, loggedIn, postData, likesData, comments, data
  };
}

export default usePostLayout;
