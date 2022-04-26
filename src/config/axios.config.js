import axios from 'axios';

export const API_V1 = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  timeout: 2500
});
