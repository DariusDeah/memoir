import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userApi } from '../../api/User.api';

function CreatorSpotlight() {
  const [creator, setCreator] = useState('');
  const fetchCreatorOfMonth = async () => {
    const fetchedCreator = await userApi.getCreatOfMonth();
    setCreator(fetchedCreator);
  };
  useEffect(() => {
    fetchCreatorOfMonth();
  }, []);
  return (
    <section>
      {creator && (
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
          <div className="flex flex-wrap items-center mx-auto max-w-7xl">
            <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
              <div>
                <div className="relative w-full max-w-lg">
                  <div
                    className="
                    absolute
                    top-0
                    rounded-full
                    bg-slate-300
                    -left-4
                    w-72
                    h-72
                    mix-blend-multiply
                    filter
                    blur-xl
                    opacity-70
                    animate-blob
                  "
                  />
                  <div
                    className="
                    absolute
                    rounded-full
                    bg-slate-200
                    -bottom-24
                    right-20
                    w-72
                    h-72
                    mix-blend-multiply
                    filter
                    blur-xl
                    opacity-70
                    animate-blob
                    animation-delay-4000
                  "
                  />
                  <div className="relative">
                    <img
                      className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                      alt="hero"
                      src={creator.photo}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="
              flex flex-col
              items-center
              mt-12
              mb-16
              text-left
              lg:flex-grow lg:w-1/2 lg:pl-6
              xl:pl-24
              md:mb-0
              xl:mt-0
            "
            >
              <h1
                className="
                mb-8
                text-4xl
                font-bold
                leading-none
                tracking-tighter
                text-neutral-600
                md:text-7xl
                lg:text-5xl
              "
              >
                {' '}
                Creator Spotlight{' '}
              </h1>
              <p className="mb-8 text-base leading-relaxed text-center text-gray-500">
                {' '}
                @{creator.name} is this months creator of the month take a
                moment to check out their amazing content.{' '}
              </p>
              <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
                <div className="mt-3 rounded-lg sm:mt-0 ">
                  <Link to={`/profile/${creator._id}`}>
                    <button
                      className="
                    items-center
                    block
                    px-10
                    py-4
                    text-base
                    font-medium
                    text-center text-white
                    transition
                    duration-500
                    ease-in-out
                    transform
                    bg-black
                    rounded-xl
                    hover:bg-slate-800
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:bg-slate-800
                  "
                      type="button"
                    >
                      {' '}
                      Go To Profile{' '}
                    </button>
                  </Link>
                </div>
                <div className="mt-3 rounded-lg sm:mt-0 sm:ml-3" />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap lg:mt-8  justify-center  border-b-2 border-grey-500 " />
        </div>
      )}
    </section>
  );
}

export default CreatorSpotlight;
