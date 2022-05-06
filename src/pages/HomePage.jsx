import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FeaturedPosts from '../components/Posts/FeaturedPosts.component';
import Post from '../components/Posts/Post.component';
import { getFeaturedPosts, getPostFeed } from '../redux/actions/posts.actions';

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeaturedPosts());
    dispatch(getPostFeed());
  }, [dispatch]);
  return (
    <>
      <FeaturedPosts />
      <h1 className="text-center font-bold text-3xl"> feed</h1>
      <Post />
    </>
  );
}

export default HomePage;
