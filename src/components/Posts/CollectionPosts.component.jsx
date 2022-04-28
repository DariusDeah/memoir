import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../UI/Avatar.ui';

function CollectionPosts({ posts }) {
  return (
    posts &&
    posts.map((post) => (
      <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
        <a
          href="/"
          className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-400"
          aria-label="Read article"
          title="Nori grape silver beet broccoli kombu beet"
        >
          {post.title}
        </a>
        <p className="max-w-xs mx-auto mb-2 text-gray-700">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque.
        </p>
        <Link to={`/posts/${post._id}`}>
          <p className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            Read more
          </p>
        </Link>
      </div>
    ))
  );
}

export default CollectionPosts;
