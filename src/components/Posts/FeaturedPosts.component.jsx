import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Avatar from '../UI/Avatar.ui';

function FeaturedPosts() {
  const { featuredPosts, pending, error } = useSelector((state) => state.posts);
  return (
    <section>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 border-b-4 border-grey-400">
        <h1 className="font-bold text-xl lg:text-4xl pb-10 ">Featured Posts</h1>
        <div className="grid gap-10 row-gap-8  lg:grid-cols-5">
          {featuredPosts[0] && !pending && (
            <div className="lg:col-span-2  mb-12 lg:mb-0">
              <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                {featuredPosts[0].createdAt}
              </p>
              <div className="mb-3">
                <Link to={`/posts/${featuredPosts[0]._id}`}>
                  <img
                    className="
                object-cover object-center
                w-full
                mb-8
                lg:h-48
                md:h-36
                rounded-xl
              "
                    src={featuredPosts[0].coverImg}
                    alt="blog"
                  />

                  <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                    {featuredPosts[0].title}
                  </p>
                </Link>
              </div>
              <p className="mb-4 text-base text-gray-700 md:text-lg">
                {featuredPosts[0].contentShort}
              </p>
              <div className="flex items-center">
                <a href="/" aria-label="Author" className="mr-3">
                  <Avatar
                    id={featuredPosts[0].creator[0]._id}
                    photo={featuredPosts[0].creator[0].photo}
                    styles="object-cover w-12 h-12 rounded-full shadow-sm"
                  />
                </a>
                <div>
                  <a
                    href="/"
                    aria-label="Author"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    {featuredPosts[0].creator[0].name}
                  </a>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Author
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap py-6 space-x-5 lg:justify-start justify-center mb-10 mt-5 lg:mt-0 border-b-2 border-grey-500 ">
                {featuredPosts[0].tags.map((tag) => (
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="px-3 py-1 rounded-sm hover:underline bg-violet-600 text-white"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-col space-y-8 lg:col-span-3 lg:ml-12 ">
            {featuredPosts[1] && (
              <div className=" mb-12 lg:mb-0">
                <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                  {featuredPosts[1].createdAt}
                </p>
                <div className="mb-3">
                  <Link to={`/posts/${featuredPosts[1]._id}`}>
                    <img
                      className="
           object-cover object-center
                w-full
                mb-8
                lg:h-48
                md:h-36
                rounded-xl
              "
                      src={featuredPosts[1].coverImg}
                      alt="blog"
                    />
                    <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                      {featuredPosts[1].title}
                    </p>
                  </Link>
                </div>
                <p className="mb-4 text-base text-gray-700 md:text-lg">
                  {featuredPosts[1].contentShort}
                </p>

                <div className="flex items-center">
                  <a href="/" aria-label="Author" className="mr-3">
                    <Avatar
                      id={featuredPosts[1].creator[0]._id}
                      photo={featuredPosts[1].creator[0].photo}
                      styles="object-cover w-12 h-12 rounded-full shadow-sm"
                    />
                  </a>
                  <div>
                    <a
                      href="/"
                      aria-label="Author"
                      className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      {featuredPosts[1].creator[0].name}
                    </a>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                      Author
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap py-6 space-x-5 lg:justify-start justify-center mb-10 mt-5 lg:mt-0 border-b-2 border-grey-500 ">
                  {featuredPosts[1].tags.map((tag) => (
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="px-3 py-1 rounded-sm hover:underline bg-violet-600 text-white"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {featuredPosts[2] && (
              <div className=" mb-12 lg:mb-0">
                <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                  {featuredPosts[2].createdAt}
                </p>
                <div className="mb-3">
                  <Link to={`/posts/${featuredPosts[2]._id}`}>
                    <img
                      className="
           object-cover object-center
                w-full
                mb-8
                lg:h-48
                md:h-36
                rounded-xl
              "
                      src={featuredPosts[2].coverImg}
                      alt="blog"
                    />
                    <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                      {featuredPosts[2].title}
                    </p>
                  </Link>
                </div>
                <p className="mb-4 text-base text-gray-700 md:text-lg">
                  {featuredPosts[2].contentShort}
                </p>

                <div className="flex items-center">
                  <a href="/" aria-label="Author" className="mr-3">
                    <Avatar
                      photo={featuredPosts[2].creator[0]._id}
                      photo={featuredPosts[2].creator[0].photo}
                      styles="object-cover w-12 h-12 rounded-full shadow-sm"
                    />
                  </a>
                  <div>
                    <a
                      href="/"
                      aria-label="Author"
                      className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      {featuredPosts[2].creator[0].name}
                    </a>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                      Author
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap py-6 space-x-5 lg:justify-start justify-center mb-10 mt-5 lg:mt-0 border-b-2 border-grey-500 ">
                  {featuredPosts[2].tags.map((tag) => (
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="px-3 py-1 rounded-sm hover:underline bg-violet-600 text-white"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPosts;
