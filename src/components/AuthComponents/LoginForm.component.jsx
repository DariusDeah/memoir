import React from 'react';

function LoginForm(props) {
  return (
    <div>
      <div className="mt-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
          htmlFor="LoggingEmailAddress"
        >
          Email Address
        </label>
        <input
          id="LoggingEmailAddress"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="email"
        />
      </div>

      <div className="mt-4">
        <div className="flex justify-between">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
            htmlFor="loggingPassword"
          >
            Password
          </label>
          <a
            href="#"
            className="text-xs text-gray-500 dark:text-gray-300 hover:underline hover:cursor-pointer"
          >
            Forgot Password?
          </a>
        </div>

        <input
          id="loggingPassword"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="password"
        />
      </div>

      <div className="mt-8">
        <button className="w-full px-4 py-2 tracking-wide bg-gray-800 text-white transition-colors duration-200 transform hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          Login
        </button>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        <p
          className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline hover:cursor-pointer"
          onClick={() => props.toggleFunction(true)}
        >
          Not a member of? sign up
        </p>

        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
      </div>
    </div>
  );
}

export default LoginForm;
