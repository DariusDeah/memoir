import { API_V1 } from '../config/axios.config';

class CollectionApi {
  async getUserCollections(userId) {
    try {
      console.log(userId);
      const res = await API_V1.get(
        `/users/${userId}/collections`,
        { withCredentials: true }
      );
      return res.data;
    } catch (error) {
      throw new Error('collection not found ');
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
}
export const collectionApi = new CollectionApi();
