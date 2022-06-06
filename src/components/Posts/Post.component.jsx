import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../UI/Alert.ui';
import Avatar from '../UI/Avatar.ui';
import DottedDropdown from '../UI/DottedDropdown.ui';
import Bookmark from '../UI/Icons/Bookmark.icon';
import Tags from '../UI/Tags.ui';
import usePost from './Post.hook';
import PostSkeleton from './ui/PostSkeleton.ui';

function Post() {
  const {
    posts,
    account,
    pending,
    error,
    loggedIn,
    items,
    deletePost,
    editPost,
    makePrivateFunction,
    makePublicFunction
  } = usePost();
  return (
    <section>
      {error && !pending && (
        <Alert title={error.name} message={error.message} />
      )}

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
        {error && <h1>{error.message}</h1>}

        <div className="grid w-full grid-cols-1 gap-7 mx-auto lg:grid-cols-3 ">
          {posts &&
            posts.map((post) => (
              <div className="p-6 bg-white rounded-md h-fit" key={post.id}>
                <div className="flex justify-between">
                  <h2 className=" text-xs font-semibold tracking-widest text-gray-600 uppercase pb-2">
                    {new Date(post.createdAt)
                      .toDateString()
                      .substring(4, post.createdAt.length)}
                  </h2>
                  {loggedIn && account.id === post.creator._id && (
                    <DottedDropdown
                      items={items}
                      deleteFunction={deletePost}
                      editFunction={editPost}
                      makePrivateFunction={makePrivateFunction}
                      makePublicFunction={makePublicFunction}
                      itemId={post._id}
                    />
                  )}
                </div>
                <div>
                  <Link to={`/posts/${post._id}`}>
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
                    {post.status !== 'draft' && loggedIn && (
                      <Bookmark postId={post._id} />
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
                <div className="flex items-center mt-10  ">
                  <Avatar
                    photo={post.creator.photo}
                    // FIXME dont use ._id
                    id={post.creator._id}
                    styles="w-12 h-12"
                  />

                  <div className="px-2">
                    <p
                      aria-label="Author"
                      className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400 "
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
            ))}
          {pending && <PostSkeleton />}
        </div>
      </div>
    </section>
  );
}

export default Post;
