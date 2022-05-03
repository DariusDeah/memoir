import React from 'react';

function PostSkeleton() {
  const posts = [1, 2, 3, 4, 5, 7, 8, 9, 10];
  return (
    <>
      {posts.map(() => (
        <div className="p-6">
          <div className="flex justify-between" />
          <div>
            <div
              className="
                              object-cover object-center
                              w-full
                              mb-8
                              lg:h-48
                              md:h-36
                              rounded-xl
                              animate-pulse
                              bg-slate-200"
            />
          </div>
          <h1
            className="
                          mx-auto
                          mb-8
                          text-2xl
                          font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl
                          animate-pulse
                          h-8
                          bg-slate-200"
          >
            {' '}
          </h1>
          <p className="mx-auto h3 text-base text-gray-700 md:text-lg overflow-hidden bg-slate-200 h-1">
            {' '}
          </p>
          <p className="mx-auto h3 text-base text-gray-700 md:text-lg overflow-hidden bg-slate-200 h-1">
            {' '}
          </p>
          <div className="flex items-center mt-10 ">
            <div className="w-12 h-12 rounded-full animate-pulse bg-slate-200" />
            <div>
              <p
                aria-label="Author"
                className="font-semibold text-gray-800 bg-slate-200 animate-pulse h-1"
              />
              <p className="text-sm font-medium leading-4 text-gray-600 bg-slate-200 animate-pulse h-1" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default PostSkeleton;
