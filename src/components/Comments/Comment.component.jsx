import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { commentApi } from '../../api/comment.api';
import DottedDropdown from '../UI/DottedDropdown.ui';

function Comment({ commentData }) {
  const account = useSelector((state) => state.account.account);
  const [commentValues, setcommentValues] = useState('');
  const items = [
    {
      id: 1,
      title: 'Edit',
      action: 'editComment',
      type: 'Edit'
    },
    { id: 2, title: 'Delete' }
  ];
  const dateFormat = (date) =>
    new Date(date).toDateString().substring(4, date.length);
  const editComment = async (commentId) => {
    console.log(commentValues);
    await commentApi.editComment(commentId, commentValues);
  };
  return (
    <>
      {commentData
        ? commentData.map((comment) => (
            <div
              className="max-w-2xl px-8 py-4  my-9 mx-auto bg-white rounded-lg shadow-md "
              key={comment._id}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-light text-black ">
                  {comment.createdAt && dateFormat(comment.createdAt)}
                </span>
              </div>
              <div className="mt-2 mb-10">
                <input
                  className="mt-2 text-gray-600  text-left"
                  placeholder={comment.content}
                  onInputCapture={(e) => setcommentValues(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <img
                    className=" object-cover w-10 h-10 mx-4 rounded-full sm:block"
                    src={comment.creator.photo}
                    alt="avatar"
                  />
                  <a className="font-bold text-black cursor-pointer ">
                    {comment.creator.name}
                  </a>
                </div>
                <div className="">
                  {account.id === comment.creator._id ? (
                    <DottedDropdown
                      items={items}
                      editFunction={editComment}
                      itemId={comment._id}
                    />
                  ) : (
                    ''
                  )}
                  <button className="text-blue-400 lg:px-4 py-4 hover:bg-blue-50 rounded-md p-3 border-blue-400">
                    View Replies
                  </button>
                </div>
              </div>
              {account.id !== comment.creator._id ? (
                <div className="mt-4">
                  <p>Reply to @{comment.creator.name}</p>{' '}
                  <input className="h-12 w-full border-2 border-black rounded-lg" />
                  <button className="text-blue-400 hover:bg-blue-50 rounded-md p-3">
                    Reply
                  </button>
                </div>
              ) : (
                ''
              )}
            </div>
          ))
        : ''}
    </>
  );
}

export default Comment;
