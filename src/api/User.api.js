import { API_V1 } from '../config/axios.config';

class UserApi {
  async getUserById(userId) {
    try {
      const res = await API_V1.get(`/users/${userId}`);
      return res.data;
    } catch (error) {
      throw new Error('error fetching user');
    }
  }

  async updateUser(userId, userData) {
    try {
      console.log({ userData });
      const formData = new FormData();
      userData.coverImg
        && formData.append('coverImg', userData.coverImg);
      userData.photo && formData.append('photo', userData.photo);
      userData.name && formData.append('name', userData.name);
      userData.email && formData.append('email', userData.email);
      userData.bio && formData.append('bio', userData.bio);
      const res = await API_V1({
        method: 'patch',
        url: `/users/${userId}`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          enctype: 'multipart/form-data'
        },
        withCredentials: true
      });
      return res.data;
    } catch (error) {
      throw new Error('error updating user');
    }
  }

  async followUser(userId) {
    try {
      const res = await API_V1.post(`/users/${userId}/followers`, null, { withCredentials: true });
      return res.data;
    } catch (error) {
      throw new Error('error following user');
    }
  }

  async unfollowUser(userId, followerId) {
    try {
      const res = await API_V1.delete(`/users/${userId}/followers`, { withCredentials: true });
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  }

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

  async getCreatOfMonth() {
    try {
      // API_V1.interceptors.request.use(
      //   config => {
      //     // config.headers['Access-Control-Max-Age'] = 300
      //     config.headers['Cache-Control'] = 'public, max-age=300' 
      //     return config
      //   },
        
      //   )
       const res =  await API_V1.get('creator-of-month')
      return res.data.data[0];
    } catch (error) {
      throw new Error('error getting creator of month');
    }
  }
}
export const userApi = new UserApi();
