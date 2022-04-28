import { API_V1 } from '../config/axios.config';

class CollectionApi {
  async getUserCollections(userId) {
    try {
      const res = await API_V1.get(
        `/users/${userId}/collections`,
        { withCredentials: true }
      );
      return res.data;
    } catch (error) {
      throw new Error('collection not found ');
    }
  }

  async getCollectionById(collectionId) {
    try {
      const res = await API_V1.get(`/collections/${collectionId}`, { withCredentials: true });
      return res.data;
    } catch (error) {
      throw new Error('error getting collection');
    }
  }

  async createCollection(collectionData) {
    try {
      await API_V1.post('/collections', collectionData, {
        withCredentials: true,
      });
    } catch (error) {
      throw new Error('error creating collection');
    }
  }

  async addPostToCollection(collectionId, postId) {
    try {
      await API_V1.post(
        `/collections/${collectionId}`,
        { postIds: postId },
        { withCredentials: true }
      );
    } catch (error) {
      throw new Error('error creating collection');
    }
  }

  async removeCollection(collectionId) {
    try {
      await API_V1.delete(`collections/${collectionId}`, { withCredentials: true });
    } catch (error) {
      throw new Error('Error deleting collection');
    }
  }

  async editCollection(collectionId, data) {
    try {
      await API_V1.patch(`collections/${collectionId}`, data, { withCredentials: true });
    } catch (error) {
      throw new Error('Error editing collection');
    }
  }
}
export const collectionApi = new CollectionApi();
