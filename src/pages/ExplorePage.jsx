import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CreatorSpotlight from '../components/Posts/CreatorSpotlight.component';
import Post from '../components/Posts/Post.component';
import { getPosts } from '../redux/actions/posts.actions';

function ExplorePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(''));
  });
  return (
    <>
      <h1 className="text-2xl text-center al text-grey-400 font-bold pb-6">
        Explore🌐
      </h1>
      <CreatorSpotlight />

      {/* <Tags tags={Tag_Types} /> */}
      <Post />
    </>
  );
}

export default ExplorePage;
