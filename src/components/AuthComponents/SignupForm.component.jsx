import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { accountApi } from '../../api/Account.api';
import { signupAccount } from '../../redux/actions/account.actions';
import { AuthStyles } from './Auth.styles';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('email is required'),
  password: yup.string().min(9).required('password required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'password does not match')
});

function SignupForm(props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirm: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(signupAccount(values));
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mt-4">
        <label className={AuthStyles.label} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          className={AuthStyles.input}
          type="text"
          required
          value={formik.values.name}
          onChange={formik.handleChange}
          onError={formik.touched.name && Boolean(formik.errors.name)}
        />
      </div>

      <div className="mt-4">
        <label className={AuthStyles.label} htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          className={AuthStyles.input}
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
          <label className={AuthStyles.label} htmlFor="password">
            Password
          </label>
        </div>

        <input
          id="password"
          className={AuthStyles.input}
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
          <label className={AuthStyles.label} htmlFor="passwordConfirm">
            Confirm Password
          </label>
        </div>

        <input
          required
          className={AuthStyles.input}
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
        <button className={AuthStyles.button} type="submit">
          Register
        </button>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b  md:w-1/4" />
        <p
          className="text-xs text-gray-500 uppercase  hover:underline hover:cursor-pointer"
          onClick={() => props.toggleFunction(false)}
        >
          already a member? Sign in
        </p>

        <span className="w-1/5 border-b  md:w-1/4" />
      </div>
    </form>
  );
}

export default SignupForm;
