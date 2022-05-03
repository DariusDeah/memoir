import React from 'react';
import { defaultSkeleton } from '../../../default.styles';

function PostLayoutSkeleton() {
  return (
    <>
      <div className="w-full mx-auto space-y-4 text-center">
        <div
          className={`text-4xl font-bold leading-tight md:text-5xl h-10 ${defaultSkeleton.animation} ${defaultSkeleton.color}`}
        />
      </div>
      <div
        className={`text-coolGray-800 h-3 ${defaultSkeleton.animation} ${defaultSkeleton.color}`}
      />

      <div className="pt-12 pb-12 border-t border-b-2 border-grey-500  border-coolGray-300">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row ">
          {/* <img src={post.authorPhoto} alt="" className="" /> */}
          <div
            className={`self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start border-coolGray-300 ${defaultSkeleton.animation} ${defaultSkeleton.color}`}
          />
          <div className="flex flex-col text-start sm:text-start">
            <div
              className={`text-lg font-semibold h-10 ${defaultSkeleton.animation} ${defaultSkeleton.color}`}
            />
            <p
              className={`h-2 ${defaultSkeleton.animation} ${defaultSkeleton.color}`}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostLayoutSkeleton;
