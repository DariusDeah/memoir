import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { collectionApi } from '../../api/collections.api';
import { deleteCollection } from '../../redux/actions/collections.actions';

const schema = yup.object().shape({
  name: yup.string().required()
});
function useCollectionList() {
  const dispatch = useDispatch();
  const removeCollection = async (collectionId) => {
    dispatch(deleteCollection(collectionId));
  };
  const [collectionId, setCollectionId] = useState('');
  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: schema,
    onSubmit: (values) => {
      collectionApi.editCollection(collectionId, values);
    }
  });
  return {
    removeCollection, collectionId, setCollectionId, formik
  };
}

export default useCollectionList;
