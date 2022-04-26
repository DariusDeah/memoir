import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { postApi } from '../../api/Post.api';

const schema = yup.object().shape({
  content: yup.string().required().max(255).min(1)
});
function CommentCreate() {
  const account = useSelector((state) => state.account.account);
  const post = useSelector((state) => state.posts.posts);
  const formik = useFormik({
    initialValues: {
      content: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      postApi.commentPost(post.id, values);
    }
  });
  return (
    <div className="max-w-lg px-8 py-4 mx-auto mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-700">
      <div className="flex justify-center -mt-16 md:justify-start">
        <img
          className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
          alt="Testimonial avatar"
          src={account.photo}
        />
      </div>

      <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
        @{account.name}
      </h2>

      <textarea
        className="mt-2 h-40 w-80 dark:bg-gray-700 rounded-lg  text-gray-600 dark:text-gray-200 border-2 border-black"
        id="content"
        value={formik.values.content}
        onChange={formik.handleChange}
      />

      <div className="flex justify-end mt-4">
        <button
          className="text-xl font-medium text-blue-500 dark:text-blue-300"
          type="submit"
          onClick={formik.handleSubmit}
        >
          submit
        </button>
      </div>
    </div>
  );
}
export default CommentCreate;
