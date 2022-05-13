import axios from 'axios';

export const API_V1 = axios.create({
  baseURL: 'https://memoir-app-api.com/api/v1',
  timeout: 2500
});
