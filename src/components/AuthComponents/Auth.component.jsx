import React, { useState } from 'react';
import GoogleOauthIcon from './GoogleOauthIcon.component';
import LoginForm from './LoginForm.component';
import SignupForm from './SignupForm.component';

function AuthPage() {
  const [isNewUser, setIsNewUser] = useState(false);

  const toggleNewUser = (bool) => {
    setIsNewUser(bool);
  };
  return (
    <div className="flex max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl">
      <div className="hidden bg-cover lg:block lg:w-1/2">
        <img
          className="img-responsive object-fill"
          src="https://images.unsplash.com/photo-1532975313331-cbaf920cf049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"
          alt="login"
        />
      </div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <h2 className="text-2xl font-semibold text-center text-gray-700 ">
          Memoir.
        </h2>

        <p className="text-xl text-center text-gray-600 font-bold">
          {isNewUser ? 'Create Account' : 'Welcome back!'}
        </p>

        <GoogleOauthIcon />
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b  lg:w-1/4" />

          <p className="text-xs text-center text-gray-500 uppercase  ">
            or login with email
          </p>

          <span className="w-1/5 border-b lg:w-1/4" />
        </div>
        {isNewUser ? (
          <SignupForm toggleFunction={toggleNewUser} />
        ) : (
          <LoginForm toggleFunction={toggleNewUser} />
        )}
      </div>
    </div>
  );
}

export default AuthPage;
