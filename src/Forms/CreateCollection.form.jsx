import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { collectionApi } from '../api/collections.api';
import { createCollection } from '../redux/actions/collections.actions';

const schema = yup.object().shape({
  name: yup.string().required()
});

function CreateCollection() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createCollection(values));
    }
  });

  return (
    <form className="relative my-3" onSubmit={formik.handleSubmit}>
      <input
        className="w-full py-4 pl-3 pr-16 text-sm border-2 border-gray-200 rounded-lg"
        id="name"
        name="name"
        type="text"
        placeholder="New Collection"
        value={formik.values.name}
        onChange={formik.handleChange}
      />

      <button
        className="absolute p-2 text-white -translate-y-1/2 bg-blue-600 rounded-full top-1/2 right-4"
        type="submit"
      >
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </form>
  );
}

export default CreateCollection;
