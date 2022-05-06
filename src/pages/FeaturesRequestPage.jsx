import React from 'react';

function FeaturesRequestPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
        <div className="flex justify-center xl:w-1/2">
          <img
            className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
        </div>

        <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
            Make A Feature Request!
          </h2>

          <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">
            Have some excellent ideas of features that should be implemented on
            Memoir? Shoot me an email and we can discuss it further
          </p>

          <div className="mt-6 sm:-mx-2">
            <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2" />

            <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
              <a
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600"
                href="mailto:comdariusdeah21@gmail.com?subject = Features"
              >
                <span className="mx-2">Email a Request</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesRequestPage;
