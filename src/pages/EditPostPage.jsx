import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { useParams } from 'react-router';
import ImageUpload from '../components/PostCreation/ImageUpload.component';
import Avatar from '../components/UI/Avatar.ui';
import TagsList from '../components/UI/TagsList.ui';
import RichTextEditor from '../Forms/RichTextEditor.form';
import { postApi } from '../api/Post.api';
import { Tag_Types } from '../models/tags.model';
import { getPost } from '../redux/actions/posts.actions';

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
function EditPostPage() {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.posts);
  console.log(post);
  const account = useSelector((state) => state.account.account);
  const [selectedImage, setSelectedImage] = useState('');
  const [content, setContent] = useState('');
  const selectedTags = [];
  useEffect(() => {
    dispatch(getPost(postId));
  }, []);

  const formik = useFormik({
    initialValues: {
      title: 'no title yet',
      content: 'No Content Yet',
      coverImg: '',
      status: '',
      tags: []
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log({ values });
      postApi.editPost(postId, values);
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
      {post && (
        <form className="p-5" onSubmit={formik.handleSubmit}>
          <div className="flex pb-3">
            {/* TODO get rid of this ternary and block this page from being accesed if the user is not signed in  */}
            {account && (
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
          <img
            src={post.image}
            className=" h-80 w-80 rounded-lg justify-center"
          />
          <ImageUpload imageSelector={chooseImage} file={selectedImage} />
          <label htmlFor="title" className="font-semibold ">
            Title
          </label>
          <input
            aria-label="title"
            id="title"
            onChange={formik.handleChange}
            className="p-5  border-2 border-black rounded-md w-full font-bold"
            placeholder={post.title}
            value={formik.values.title}
          />
          <RichTextEditor
            writeContent={writeContent}
            placeholder={post.content}
          />
          <TagsList
            tags={Tag_Types}
            selectTag={selectTag}
            removeSelectedTag={removeSelectedTag}
            selectedTags={formik.values.tags}
          />
          <h5
            style={{
              color: formik.values.content.length > maxCharacters && 'red'
            }}
          >
            {maxCharacters - content.length}
          </h5>

          <div className="flex">
            <button
              className="relative inline-block mt-5 px-8 py-3 overflow-hidden border border-green-600 group focus:outline-none focus:ring"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                // SetStatus('completed');
                formik.handleSubmit();
              }}
            >
              <span className="absolute inset-x-0  bottom-0 h-[2px] transition-all bg-green-600 group-hover:h-full group-active:bg-green-500" />

              <span className="relative text-sm font-medium text-green-500 transition-colors group-hover:text-white">
                Save Changes
              </span>
            </button>
            <button
              className="relative inline-block mt-5 px-8 py-3 overflow-hidden border border-red-600 group focus:outline-none focus:ring "
              type="reset"
            >
              <span className="absolute inset-x-0  bottom-0 h-[2px] transition-all bg-red-600 group-hover:h-full group-active:bg-red-500" />

              <span className="relative text-sm font-medium text-red-500 transition-colors group-hover:text-white">
                Discard
              </span>
            </button>
          </div>
        </form>
      )}
    </>
  );
}

export default EditPostPage;
