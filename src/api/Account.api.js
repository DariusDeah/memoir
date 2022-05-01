import { API_V1 } from '../config/axios.config';

class AccountApi {
  async loginAccount(userData) {
    try {
      const res = await API_V1.post('/login', userData, {
        withCredentials: true
      });
      return res.data;
    } catch (error) {
      throw new Error('error logging in user');
    }
  }

  async refreshAccount() {
    try {
      const res = await API_V1.get('/refresh', {
        withCredentials: true
      });
      return res.data;
    } catch (error) {
      throw new Error('error refreshing user');
    }
  }

  async signupAccount(userData) {
    try {
      const res = await API_V1.post('/sign-up', userData, {
        withCredentials: true
      });
      return res.data;
    } catch (error) {
      throw new Error('error registering user');
    }
  }

  async forgotPasswordEmail(email) {
    try {
      const res = await API_V1.post('/forgot-password', email);
      if (!res.data.includes('email')) return undefined;
      return res;
    } catch (error) {
      throw new Error('error sending email');
    }
  }

  async logoutAccount() {
    try {
      const res = await API_V1.get('/logout', {
        withCredentials: true
      });
      return res;
    } catch (error) {
      throw new Error('error logging out');
    }
  }

  async googleOAuthCreateAccount() {
    try {
      const user = await API_V1.get('/auth/google/url');
      console.log(user, 'hit');
      return user;
    } catch (error) {
      throw new Error('error with google sign-in');
    }
  }
}
export const accountApi = new AccountApi();
