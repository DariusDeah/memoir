import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CollectionPosts from '../components/Posts/CollectionPosts.component';
import Post from '../components/Posts/Post.component';
import Avatar from '../components/UI/Avatar.ui';
import { getCollectionById } from '../redux/actions/collections.actions';

function CollectionPage() {
  const dispatch = useDispatch();
  const { collectionId } = useParams();
  const { selectedCollection, error, pending, collectionData } = useSelector(
    (state) => state.collections
  );
  useEffect(() => {
    dispatch(getCollectionById(collectionId));
  }, []);

  return (
    selectedCollection &&
    collectionData && (
      <>
        <Avatar
          photo={selectedCollection.creator.photo}
          id={selectedCollection.creator._id}
          styles="w-12 h-12"
        />
        <h1>{selectedCollection.name}</h1>
        Posts:
        <h1>{selectedCollection.posts.length}</h1>
        <CollectionPosts posts={selectedCollection.posts} />
      </>
    )
  );
}

export default CollectionPage;
