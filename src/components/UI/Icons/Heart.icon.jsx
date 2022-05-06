import React from 'react';
import { useDispatch } from 'react-redux';
import { postApi } from '../../../api/Post.api';
import { likePost, unlikePost } from '../../../redux/actions/likes.action';

function Heart({ accountId, postId, likes }) {
  const dispatch = useDispatch();
  return likes && likes.filter((like) => like.userId === accountId).length ? (
    <div className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-red-500 cursor-pointer"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={() => {
          dispatch(unlikePost(postId));
        }}
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
      <p className="text-lg">{likes && likes.length}</p>
    </div>
  ) : (
    <div className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-red-500 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
        onClick={() => {
          dispatch(likePost(postId));
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <p className="text-lg">{likes.length}</p>
    </div>
  );
}

export default Heart;
