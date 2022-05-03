import React from 'react';
import { useSelector } from 'react-redux';

function usePostLayout() {
  const {
    post, pending, error, postData
  } = useSelector((state) => state.posts);
  const { account, loggedIn } = useSelector((state) => state.account);
  const likes = useSelector((state) => state.likes.likes);
  return {
    post, pending, error, likes, account, loggedIn, postData
  };
}

export default usePostLayout;
