import { createAsyncThunk } from '@reduxjs/toolkit';
import { collectionApi } from '../../api/collections.api';
import { Collection_Action_Types } from '../constants/action-types';

export const getAccountCollections = createAsyncThunk('account/collections', async (accountId) => {
  const { data } = await collectionApi.getUserCollections(accountId);
  return data;
});
export const getUserCollections = createAsyncThunk('user/collections', async (userId) => {
  const { data } = await collectionApi.getUserCollections(userId);
  return data;
});

export const getCollectionById = createAsyncThunk('collections/id', async (collectionId) => {
  const { data } = await collectionApi.getCollectionById(collectionId);
  return data;
});
export const createCollection = createAsyncThunk('collections/create', async (collectionData) => {
  const { data } = await collectionApi.createCollection(collectionData);
  return data;
});

export const deleteCollection = createAsyncThunk('collections/delete', async (collectionId) => {
  const { data } = await collectionApi.removeCollection(collectionId);
  return data;
});
