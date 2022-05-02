import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginAccount } from '../../redux/actions/account.actions';
import Spinner from '../UI/Icons/spinner.ui';
import FailAlert from '../UI/FailAlert.ui';
import { AuthStyles } from './Auth.styles';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('email is required'),
  password: yup.string().min(9).required('password required')
});
function LoginForm(props) {
  const dispatch = useDispatch();
  const { pending } = useSelector((state) => state.account);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(loginAccount(values));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mt-4">
        <label className={AuthStyles.label} htmlFor="LoggingEmailAddress">
          Email Address
        </label>
        <input
          id="email"
          className={AuthStyles.input}
          type="email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
        />
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <label className={AuthStyles.label} htmlFor="loggingPassword">
            Password
          </label>
          <p className={AuthStyles.label}>Forgot Password?</p>
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

      <div className="mt-8">
        <button className={AuthStyles.button} type="submit" disabled={pending}>
          {pending ? <Spinner /> : 'Login'}
        </button>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
        <p
          className="text-xs text-gray-500 uppercase  hover:underline hover:cursor-pointer"
          onClick={() => props.toggleFunction(true)}
        >
          Not a member? sign up
        </p>

        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
      </div>
    </form>
  );
}

export default LoginForm;
