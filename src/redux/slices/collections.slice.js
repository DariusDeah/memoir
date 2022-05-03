import { createSlice } from '@reduxjs/toolkit';
import {
  createCollection, deleteCollection, getAccountCollections, getCollectionById, getUserCollections
} from '../actions/collections.actions';

const collections = createSlice({
  name: 'collections',
  initialState: {
    accountCollections: [],
    userCollections: [],
    selectedCollection: {},
    pending: false,
    error: false,
    collectionData: false
  },
  reducers: {},
  extraReducers: {
    [getAccountCollections.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getAccountCollections.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.accountCollections = action.payload;
    },
    [getAccountCollections.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
    },
    [getUserCollections.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getUserCollections.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.userCollections = action.payload;
    },
    [getUserCollections.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
    },
    [getCollectionById.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getCollectionById.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.selectedCollection = action.payload;
      state.collectionData = true;
    },
    [getCollectionById.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
    },
    [createCollection.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [createCollection.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.accountCollections.unshift(action.payload);
    },
    [createCollection.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
    },
    [deleteCollection.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [deleteCollection.fulfilled]: (state, action) => {
      state.pending = false;
      state.error = false;
      state.accountCollections = state.accountCollections.filter((items) => items._id !== action.payload._id);
    },
    [deleteCollection.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error;
    },

  }
});
export default collections.reducer;
