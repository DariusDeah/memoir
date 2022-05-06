import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../components/UI/SeachBar.ui';
import Post from '../components/Posts/Post.component';
import { getPosts } from '../redux/actions/posts.actions';

function SearchPage() {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const searchPost = (searchValue) => {
    console.log({ searchValue });
    dispatch(getPosts(`?search=${searchValue}`));
  };
  return (
    <>
      <h1 className="text-2xl text-center al text-grey-400 font-bold pb-6">
        Search🔍
      </h1>
      <SearchBar searchFunction={searchPost} />
      <Post />
    </>
  );
}

export default SearchPage;
