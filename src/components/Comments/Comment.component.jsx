import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentApi } from '../../api/comment.api';
import Avatar from '../UI/Avatar.ui';
import DottedDropdown from '../UI/DottedDropdown.ui';

function Comment({ commentData }) {
  const { account } = useSelector((state) => state.account);
  const [commentValues, setcommentValues] = useState('');
  const dispatch = useDispatch();
  const items = [
    {
      id: 1,
      title: 'Edit',
      action: 'editComment',
      type: 'Edit'
    },
    { id: 2, title: 'Delete' }
  ];
  const dateFormat = (date) => {
    new Date(date).toDateString().substring(4, date.length);
  };
  const editComment = async (commentId) => {
    dispatch(editComment({ commentId, values: commentData }));
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {commentData &&
        commentData.map((comment) => (
          <div
            className="max-w-2xl px-8 py-4  my-9 mx-auto bg-white rounded-lg shadow-md "
            key={comment._id}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-black ">
                {comment.createdAt && dateFormat(comment.createdAt)}
              </span>
            </div>
            <div className="mt-2 mb-10 h-fit">
              <p>{comment.content}</p>
              <input
                className="mt- w-fit h-fit text-left"
                placeholder={comment.content}
                onInputCapture={(e) => setcommentValues(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <Avatar
                  id={comment.creator._id}
                  styles=" object-cover w-10 h-10 mx-4 rounded-full sm:block"
                  photo={comment.creator.photo}
                />
                <a className="font-bold text-black cursor-pointer ">
                  {comment.creator.name}
                </a>
              </div>
              <div className="">
                {account.id === comment.creator._id && (
                  <DottedDropdown
                    items={items}
                    editFunction={editComment}
                    itemId={comment._id}
                  />
                )}
                <button className="text-blue-400 lg:px-4 py-4 hover:bg-blue-50 rounded-md p-3 border-blue-400">
                  View Replies
                </button>
              </div>
            </div>
            {/* {comment.creator &&
            account &&
            account.id !== comment.creator._id ? (
              <div className="mt-4">
                <p>Reply to @{comment.creator.name}</p>{' '}
                <input className="h-12 w-full border-2 border-black rounded-lg" />
                <button className="text-blue-400 hover:bg-blue-50 rounded-md p-3">
                  Reply
                </button>
              </div>
            ) : (
              ''
            )} */}
          </div>
        ))}
    </>
  );
}

export default Comment;
