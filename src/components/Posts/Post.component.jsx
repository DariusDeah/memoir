import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { postApi } from '../../api/Post.api';
import { getPost } from '../../redux/actions/posts.actions';
import Collections from '../Collections/ColectionsList.component';
import Avatar from '../UI/Avatar.ui';
import DottedDropdown from '../UI/DottedDropdown.ui';
import FailAlert from '../UI/FailAlert.ui';
import Bookmark from '../UI/Icons/Bookmark.icon';
import Heart from '../UI/Icons/Heart.icon';
import Modal from '../UI/Modal.ui';
import Tags from '../UI/Tags.ui';

function Post() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //  const collections = useSelector((state) => state.collections.collections);
  const account = useSelector((state) => state.account.account);
  const items = [
    { id: 1, title: 'edit', action: 'editPost' },
    { id: 2, title: 'delete', action: 'removePost' },
    { id: 3, title: 'make private', action: 'makePostPrivate' },
    { id: 4, title: 'make public', action: 'makePostPublic' }
  ];
  const deletePost = async (postId) => {
    console.log('deleting');
    await postApi.deletePost(postId);
  };
  const editPost = (postId) => {
    dispatch(getPost(postId));
    navigate(`/posts/${postId}/edit`);
  };
  const makePrivateFunction = (postId) => {
    postApi.editPost(postId, { status: 'draft' });
  };
  const makePublicFunction = (postId) => {
    postApi.editPost(postId, { status: 'completed' });
  };

  // TODO when clicking on a post pic it should take you to the post no matter what url you are at
  const posts = useSelector((state) => state.posts.posts);
  switch (posts) {
    case posts:
      return (
        <section>
          <div
            className="
          items-center
          w-full
          px-4
          py-12
          mx-auto
          md:px-8
          lg:px-8
          max-w-7xl
          "
          >
            <div className="grid w-full grid-cols-1 gap-7 mx-auto lg:grid-cols-3">
              {posts && posts.length
                ? posts.map((post) => (
                    <div className="p-6" key={post.id}>
                      <div className="flex justify-between">
                        <h2 className=" text-xs font-semibold tracking-widest text-gray-600 uppercase pb-2">
                          {new Date(post.createdAt)
                            .toDateString()
                            .substring(4, post.createdAt.length)}
                        </h2>
                        {account && account.id === post.creator._id && (
                          <DottedDropdown
                            items={items}
                            deleteFunction={deletePost}
                            editFunction={editPost}
                            makePrivateFunction={makePrivateFunction}
                            makePublicFunction={makePublicFunction}
                            postId={post.id}
                          />
                        )}
                      </div>
                      <div>
                        <Link to={`/posts/${post.id}`}>
                          <img
                            className="
                              object-cover object-center
                              w-full
                              mb-8
                              lg:h-48
                              md:h-36
                              rounded-xl
                              "
                            src={post.coverImg}
                            alt="blog"
                          />
                        </Link>
                        <span className=" inline-flex">
                          {post.status !== 'draft' && (
                            <Bookmark postId={post.id} />
                          )}
                        </span>
                      </div>
                      <h1
                        className="
                          mx-auto
                          mb-8
                          text-2xl
                          font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl
                          "
                      >
                        {' '}
                        {post.title}
                      </h1>
                      <p className="mx-auto  text-base text-gray-700 md:text-lg overflow-hidden">
                        {' '}
                        {post.contentShort}
                        {post.status === 'draft' && (
                          <p className="font-bold text-red-600">-Draft</p>
                        )}
                      </p>
                      <div className="flex items-center mt-10 ">
                        <Avatar
                          photo={post.creator.photo}
                          // FIXME dont use ._id
                          id={post.creator._id}
                          styles="w-12 h-12"
                        />
                        <div>
                          <p
                            aria-label="Author"
                            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            {post.creator.name}
                          </p>
                          <p className="text-sm font-medium leading-4 text-gray-600">
                            Author
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap py-6 space-x-2 md:space-x-5 justify-start mb-10 border-b-2 border-grey-500 ">
                        <Tags tags={post.tags} />
                      </div>
                    </div>
                  ))
                : ''}
            </div>
          </div>
        </section>
      );
    case !posts:
      return (
        <div className="flex justify-items-start">
          <FailAlert title="Posts not found!" content={posts.message} />
        </div>
      );
    default:
      return null;
  }
}

export default Post;
