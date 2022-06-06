import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import ImageUpload from '../components/PostCreation/ImageUpload.component';
import Avatar from '../components/UI/Avatar.ui';
import TagsList from '../components/UI/TagsList.ui';
import RichTextEditor from '../Forms/RichTextEditor.form';
import { postApi } from '../api/Post.api';
import { Tag_Types } from '../models/tags.model';
import Alert from '../components/UI/Alert.ui';
import { createPost } from '../redux/actions/posts.actions';

const maxCharacters = 2500;
const schema = yup.object().shape({
  title: yup.string().required('title required'),
  content: yup
    .string()
    .min(1)
    .max(maxCharacters)
    .required('post content is required '),
  coverImg: yup.mixed(),
  tags: yup.array().max(3)
});
function CreatePostPage() {
  const { account, loggedIn } = useSelector((state) => state.account);
  const [selectedImage, setSelectedImage] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const selectedTags = [];
  const formik = useFormik({
    initialValues: {
      title: 'No Title Yet',
      content: 'No Content Yet',
      coverImg: null,
      status: '',
      tags: []
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createPost(values));
    }
  });

  const chooseImage = (image) => {
    setSelectedImage(image.target.files[0]);
    // eslint-disable-next-line prefer-destructuring
    formik.values.coverImg = image.target.files[0];
    console.log(selectedImage);
  };

  const writeContent = (contents) => {
    setContent(contents);
    formik.values.content = contents;
  };

  const selectTag = (tag) => {
    if (selectedTags.length >= 3) {
      return;
    }
    selectedTags.push(tag);
    formik.values.tags.push(tag);
    console.log(formik.values.tags);
  };
  const removeSelectedTag = (tag) => {
    if (selectedTags.length) {
      const filteredTags = selectedTags.filter((tags) => tags !== tag);
      formik.values.tags = filteredTags;
      console.log({ filteredTags });
    }
  };
  const SetStatus = (status) => {
    formik.values.status = status;
  };
  return (
    <>
      <h1 className="text-2xl text-center al text-grey-400 font-bold pb-6">
        Create +
      </h1>
      <form className="p-5 bg-white" onSubmit={formik.handleSubmit}>
        <div className="flex pb-3 ">
          {/* TODO get rid of this ternary and block this page from being accesed if the user is not signed in  */}
          {account && loggedIn && (
            <>
              <Avatar
                photo={account.photo}
                id={account.id}
                styles="w-12 h-12"
              />
              <p className="mr-3 font-semibold pl-3">@{account.name}</p>
              <p>{new Date().toLocaleDateString()}</p>
            </>
          )}
        </div>
        <ImageUpload imageSelector={chooseImage} file={selectedImage} />
        <label htmlFor="title" className="font-semibold ">
          Title
        </label>
        <input
          aria-label="title"
          id="title"
          onChange={formik.handleChange}
          className="p-5  border-2 border-black rounded-md w-full font-bold"
          value={formik.values.title}
        />
        <RichTextEditor writeContent={writeContent} />
        <h5
          style={{
            color: formik.values.content.length > maxCharacters && 'red'
          }}
        >
          {maxCharacters - content.length}
        </h5>
        <TagsList
          tags={Tag_Types}
          selectTag={selectTag}
          removeSelectedTag={removeSelectedTag}
          selectedTags={formik.values.tags}
        />
        <h5 className="mt-4">
          Tags Selected:
          {selectedTags}
        </h5>
        <div className="flex">
          <button
            className="relative inline-block mt-5 px-8 py-3 overflow-hidden border border-black group focus:outline-none focus:ring"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              SetStatus('draft');
              formik.handleSubmit();
            }}
          >
            <span className="absolute inset-x-0  bottom-0 h-[2px] transition-all bg-black group-hover:h-full group-active:bg-black" />

            <span className="relative text-sm font-medium text-black transition-colors group-hover:text-white">
              Save
            </span>
          </button>
          <button
            className="relative inline-block mt-5 px-8 py-3 overflow-hidden border border-green-600 group focus:outline-none focus:ring disabled:bg-slate-400 "
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              SetStatus('completed');
              formik.handleSubmit();
            }}
          >
            <span className="absolute inset-x-0  bottom-0 h-[2px] transition-all bg-green-600 group-hover:h-full group-active:bg-green-500" />

            <span className="relative text-sm font-medium text-green-500 transition-colors group-hover:text-white">
              Save & Post
            </span>
          </button>
          <button
            className="relative inline-block mt-5 px-8 py-3 overflow-hidden border border-red-600 group focus:outline-none focus:ring "
            type="button"
          >
            <span className="absolute inset-x-0  bottom-0 h-[2px] transition-all bg-red-600 group-hover:h-full group-active:bg-red-500" />

            <span className="relative text-sm font-medium text-red-500 transition-colors group-hover:text-white">
              Discard
            </span>
          </button>
        </div>
      </form>
    </>
  );
}

export default CreatePostPage;
