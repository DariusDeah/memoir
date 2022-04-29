import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../UI/Avatar.ui';

function CollectionPosts({ posts }) {
  return (
    posts && (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full my-3">
          {posts.map((post) => (
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
              <Link to={`/posts/${post.id}`}>
                <img
                  src={post.coverImg}
                  className="object-cover w-full h-64"
                  alt=""
                />
                <div className="p-5 border border-t-0">
                  <a
                    href="/"
                    aria-label="Category"
                    title="Visit the East"
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                  >
                    {post.title}
                  </a>
                  <p className="mb-2 text-gray-700">{post.contentShort}</p>
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    Read more
                  </a>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default CollectionPosts;
