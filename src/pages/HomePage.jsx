import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FeaturedPosts from '../components/Posts/FeaturedPosts.component';
import Post from '../components/Posts/Post.component';
import { getPosts } from '../redux/actions/posts.actions';

function HomePage() {
  const dispatch = useDispatch();
  // const following = "6249e75112e1dbd4016c0cde";
  useEffect(() => {
    dispatch(getPosts(``));
  }, [dispatch]);
  return (
    <>
      <FeaturedPosts />
      <Post />
    </>
  );
}

export default HomePage;
