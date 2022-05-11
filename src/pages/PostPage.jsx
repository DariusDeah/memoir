import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Comment from '../components/Comments/Comment.component';
import CommentCreate from '../components/Comments/CommentCreate.component';
import Post from '../components/Posts/Post.component';
import PostLayout1 from '../components/Posts/PostLayout1.component';
import Spinner from '../components/UI/Icons/spinner.ui';
import { getPostComments } from '../redux/actions/comments.actions';
import { getPostLikes } from '../redux/actions/likes.action';
import { getPost, getRelatedPosts } from '../redux/actions/posts.actions';

function PostPage() {
  const [createComment, setCreateComment] = useState(false);
  const { comments, pending, error, data } = useSelector(
    (state) => state.comments
  );
  const dispatch = useDispatch();
  const { postId } = useParams();
  useEffect(() => {
    dispatch(getPost(postId));
    dispatch(getPostComments(postId));
    dispatch(getPostLikes(postId));
    dispatch(getRelatedPosts(postId));
  }, [dispatch, postId]);
  return (
    <div className="justify-center">
      <PostLayout1 />

      {/* <h1 className="text-2xl text-center al text-grey-400 font-bold pb-6">
        Collaborators:
      </h1> */}
      {/* <Collaborators /> */}
      <div className="text-center">
        <h1 className="text-2xl text-center  text-grey-400 font-bold pb-6">
          Comments:
        </h1>
        <button
          className="text-center button  bg-violet-600 px-4 py-4 rounded-lg text-white"
          onClick={() => setCreateComment(!createComment)}
          type="button"
        >
          {createComment ? 'cancel comment' : '+comment'}
        </button>
        <div className="px-4 ">{createComment && <CommentCreate />}</div>
      </div>
      <div className="px-4 lg:px-2">
        {comments && data && <Comment commentData={comments} />}
        {pending && <Spinner />}
      </div>
      <div className="mt-4">
        <h1 className="text-2xl text-center al text-grey-400 font-bold pb-6">
          related posts:
        </h1>
        <Post />
      </div>
    </div>
  );
}

export default PostPage;
