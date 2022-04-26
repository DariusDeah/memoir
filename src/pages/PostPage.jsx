import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Collaborators from '../components/Collaborators/Collaborators.component';
import Comment from '../components/Comments/Comment.component';
import CommentCreate from '../components/Comments/CommentCreate.component';
import PostLayout1 from '../components/Posts/PostLayout1.component';
import { getPostComments } from '../redux/actions/comments.actions';
import { getPost } from '../redux/actions/posts.actions';

function PostPage() {
  const [createComment, setCreateComment] = useState(false);
  // const [replyComment, setReplyComment] = useState(false);
  const comments = useSelector((state) => state.comments.comments);

  const dispatch = useDispatch();
  const { postId } = useParams();
  console.log({ postId });
  useEffect(() => {
    dispatch(getPost(postId));
    dispatch(getPostComments(postId));
  }, [dispatch, postId]);
  return (
    <div className="justify-center">
      <PostLayout1 />
      <h1 className="text-2xl text-center al text-grey-400 font-bold pb-6">
        Collaborators:
      </h1>
      <Collaborators />
      <h1 className="text-2xl text-center  text-grey-400 font-bold pb-6">
        Comments:
      </h1>
      <div className="text-center">
        <button
          className="text-center button  bg-violet-600 px-4 py-4 rounded-lg text-white"
          onClick={() => setCreateComment(!createComment)}
          type="button"
        >
          {createComment ? 'cancel comment' : '+comment'}
        </button>
        <div className="px-4  ">{createComment && <CommentCreate />}</div>
      </div>
      <div className="px-4 lg:px-2">
        <Comment commentData={comments} />
      </div>
    </div>
  );
}

export default PostPage;
