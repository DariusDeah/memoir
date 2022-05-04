import React from 'react';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { updateUser } from '../../redux/actions/user.actions';
import { userApi } from '../../api/User.api';

// TODO switch user to account
function ProfileInfo({ user }) {
  console.log({ user });
  const { userId } = useParams();
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email('invalid email'),
    bio: yup.string().max(200),
    coverImg: yup.mixed(),
    photo: yup.mixed()
  });
  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email,
      bio: user.bio || '',
      coverImg: user.coverImg,
      photo: user.photo
    },
    validationSchema: schema,
    onSubmit: (values) => {
      // dispatch(updateUser(userId, values));
      userApi.updateUser(userId, values);
    }
  });

  const chooseImage = (image, imageLocation) => {
    if (imageLocation === 'coverImg') {
      formik.values.coverImg = image;
    }
    if (imageLocation === 'photo') {
      // formik.values.photo = image.target.files[0];
      formik.values.photo = image;
      console.log(formik.values.coverImg);
    }
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="bg-white ">
        <div className="container mx-auto bg-white  rounded">
          <div className="xl:w-full border-b border-gray-300  py-5 bg-white ">
            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p className="text-lg text-gray-800  font-bold">Profile</p>
            </div>
          </div>
          <div className="mx-auto">
            <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
              <div className="rounded relative mt-8 h-48">
                <img
                  src={formik.values.coverImg}
                  alt="profile cover"
                  className="w-full h-full object-cover rounded absolute shadow"
                />
                <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded" />
                <div className="flex items-center px-3 py-2 rounded absolute right-0 mr-4 mt-4 ">
                  <div className="w-full space-y-0.5">
                    <p className="text-xs text-gray-100">Change Cover Photo</p>

                    <input
                      onInputCapture={(e) =>
                        chooseImage(e.target.files[0], 'coverImg')
                      }
                      id="coverImg"
                      type="file"
                      className="block w-full cursor-pointer appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm transition focus:border-blue-600 focus:outline-none focus:ring-1 opacity-70 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                    />
                  </div>
                </div>

                <div className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat absolute bottom-0 -mb-10 ml-12 shadow flex items-center justify-center">
                  <img
                    src={formik.values.photo}
                    alt="user"
                    className="absolute z-0 h-full w-full object-cover rounded-full shadow top-0 left-0 bottom-0 right-0"
                  />
                  <div className="absolute bg-black opacity-50 top-0 right-0 bottom-0 left-0 rounded-full z-0" />
                  <div className=" w-4 ">
                    <input
                      onInputCapture={(e) =>
                        chooseImage(e.target.files[0], 'photo')
                      }
                      id="photo"
                      type="file"
                      className="block w-full cursor-pointer appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm transition focus:border-blue-600 focus:outline-none focus:ring-1 opacity-70 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full" />
              <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                <label
                  htmlFor="bio"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  className="bg-transparent border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 "
                  placeholder="Let the world know who you are"
                  rows={5}
                  onChange={formik.handleChange}
                  value={formik.values.bio}
                />
                <p className="w-full text-right text-xs pt-1 text-gray-500 ">
                  Character Limit: 200
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto bg-white  mt-10 rounded px-4">
          <div className="xl:w-full border-b border-gray-300  py-5">
            <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
              <p className="text-lg text-gray-800  font-bold">
                Personal Information
              </p>
              <div className="ml-2 cursor-pointer text-gray-600 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={16}
                  height={16}
                >
                  <path
                    className="heroicon-ui"
                    d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="mx-auto pt-4">
            <div className="container mx-auto">
              <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="name"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className="border border-gray-300  pl-3 py-3 shadow-sm bg-transparent rounded text-sm focus:outline-none focus:border-indigo-700 placeholder-gray-500 text-gray-500 "
                  placeholder={formik.values.name}
                />
              </div>

              <div className="xl:w-1/4 lg:w-1/2 md:w-1/2 flex flex-col mb-6">
                <label
                  htmlFor="email"
                  className="pb-2 text-sm font-bold text-gray-800 "
                >
                  Email
                </label>
                <div className="border  shadow-sm rounded flex">
                  <div className="px-4 py-3  flex items-center border-r ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-mail"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={3} y={5} width={18} height={14} rx={2} />
                      <polyline points="3 7 12 13 21 7" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className="pl-3 py-3 w-full text-sm focus:outline-none placeholder-gray-500 rounded bg-transparent text-gray-500 "
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-11/12 xl:w-full">
        <div className="w-full py-4 sm:px-0 bg-white  flex justify-end">
          <button
            className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300  rounded text-indigo-600  px-6 py-2 text-xs mr-4"
            type="button"
          >
            Cancel
          </button>
          <button
            className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
ProfileInfo.propTypes = {
  user: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired
  }).isRequired
};
export default ProfileInfo;
