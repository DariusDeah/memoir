import { API_V1 } from '../config/axios.config';

class UserApi {
  async getUserById(userId) {
    try {
      const res = await API_V1.get(`/users/${userId}`);
      // console.log(res.data._id);
      return res;
    } catch (error) {
      throw new Error('error fetching user');
    }
  }

  async updateUser(userId, userData) {
    try {
      console.log(userData);
      const formData = new FormData();
      userData.coverImg !== undefined
        && formData.append('coverImg', userData.coverImg);
      userData.photo !== undefined && formData.append('photo', userData.photo);
      userData.name !== undefined && formData.append('name', userData.name);
      userData.email !== undefined && formData.append('email', userData.email);
      userData.bio !== undefined && formData.append('bio', userData.bio);
      await API_V1({
        method: 'patch',
        url: `/users/${userId}`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          enctype: 'multipart/form-data'
        },
        withCredentials: true
      });
    } catch (error) {
      throw new Error('error updating user');
    }
  }

  async followUser(userId) {
    try {
      await API_V1.post(`/users/${userId}/followers`, null, { withCredentials: true });
    } catch (error) {
      throw new Error('error following user');
    }
  }

  // async unfollowUser(userId, followerId) { }

  async getFollowers(userId) {
    try {
      const res = await API_V1.get(`users/${userId}/followers`);
      return res.data;
    } catch (error) {
      throw new Error('error getting followers');
    }
  }

  async getUserFollowings(userId) {
    try {
      const res = await API_V1.get(`users/${userId}/followings`);
      return res.data;
    } catch (error) {
      throw new Error('error getting accounts following');
    }
  }
}
export const userApi = new UserApi();
