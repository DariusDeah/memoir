import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionPosts from '../components/Posts/CollectionPosts.component';
import Post from '../components/Posts/Post.component';
import Avatar from '../components/UI/Avatar.ui';
import { getCollectionById } from '../redux/actions/collection.action';

function CollectionPage() {
  const { collectionId } = useParams();
  const collection = useSelector((state) => state.collection.collection);
  console.log(collection);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCollectionById(collectionId));
  }, []);

  return (
    collection && (
      <>
        <Avatar
          photo={collection.creator.photo}
          id={collection.creator._id}
          styles="w-12 h-12"
        />
        <h1>{collection.name}</h1>
        Posts:
        <h1>{collection.posts.length}</h1>
        <CollectionPosts posts={collection.posts} />
      </>
    )
  );
}

export default CollectionPage;
