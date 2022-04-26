import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { accountApi } from '../../api/Account.api';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('email is required'),
  password: yup.string().min(9).required('password required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'password does not match')
});

function SignupForm(props) {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      const creatUser = async () => {
        const user = await accountApi.creatAccount(values);
        console.log({ values });
        if (user) {
          // TODO trigger sucess snack bar when user is sucessfully created
          console.log(user);
        }
      };
      creatUser();
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mt-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-600 "
          htmlFor="name"
        >
          Name
        </label>
        <input
          id="name"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="text"
          required
          value={formik.values.name}
          onChange={formik.handleChange}
          onError={formik.touched.name && Boolean(formik.errors.name)}
        />
      </div>

      <div className="mt-4">
        <label
          className="block mb-2 text-sm font-medium text-gray-600 "
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          id="email"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
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
            className="block mb-2 text-sm font-medium text-gray-600 "
            htmlFor="password"
          >
            Password
          </label>
        </div>

        <input
          id="password"
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          type="password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          onError={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          onBlur={formik.handleBlur}
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <label
            className="block mb-2 text-sm font-medium text-gray-600 "
            htmlFor="passwordConfirm"
          >
            Confirm Password
          </label>
        </div>

        <input
          required
          className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md    focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
          id="passwordConfirm"
          type="password"
          value={formik.values.passwordConfirm}
          onChange={formik.handleChange}
          onError={
            formik.touched.passwordConfirm &&
            Boolean(formik.errors.passwordConfirm)
          }
          helperText={
            formik.touched.passwordConfirm && formik.errors.passwordConfirm
          }
          onBlur={formik.handleBlur}
        />
      </div>

      <div className="mt-8">
        <button
          className="w-full px-4 py-2 tracking-wide bg-gray-800 text-white transition-colors duration-200 transform hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          type="submit"
        >
          Register
        </button>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b  md:w-1/4"></span>
        <p
          className="text-xs text-gray-500 uppercase  hover:underline hover:cursor-pointer"
          onClick={() => props.toggleFunction(false)}
        >
          already a member? <span className="underline">sign in</span>
        </p>

        <span className="w-1/5 border-b  md:w-1/4"></span>
      </div>
    </form>
  );
}

export default SignupForm;
