import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { accountApi } from '../../api/Account.api';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('email is required'),
  password: yup.string().min(9).required('password required')
});

function LoginForm(props) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const loginUser = async () => {
        const user = await accountApi.loginAccount(values);
        if (user) {
          // TODO trigger sucess snack bar when user is sucessfully created
          console.log(user);
        }
      };
      loginUser();
    }
  });
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
          id="email"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="email"
          required
          // error={errors?.email}
          value={formik.values.email}
          onChange={formik.handleChange}
          onError={formik.touched.email && Boolean(formik.errors.email)}
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
          id="password"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          onError={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          onBlur={formik.handleBlur}
        />
      </div>

      <div className="mt-8">
        <button
          className="w-full px-4 py-2 tracking-wide bg-gray-800 text-white transition-colors duration-200 transform hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          onClick={formik.handleSubmit}
        >
          Login
        </button>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
        <p
          className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline hover:cursor-pointer"
          onClick={() => props.toggleFunction(true)}
        >
          Not a member of? sign up
        </p>

        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
      </div>
    </div>
  );
}

export default LoginForm;
