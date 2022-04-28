import React from 'react';
import { postApi } from '../../../api/Post.api';

function Heart({ accountId, postId, likes }) {
  const likePost = async () => {
    await postApi.likePost(postId);
  };
  const unlikePost = async () => {
    await postApi.unlikePost(postId);
  };
  return likes && likes.filter((like) => like.userId === accountId).length ? (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-red-500"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={unlikePost}
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
      <p>{likes.length}</p>
    </>
  ) : (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-red-500 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        onClick={likePost}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <p>{likes.length}</p>
    </>
  );
}

export default Heart;
