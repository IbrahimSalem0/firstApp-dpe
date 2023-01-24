import axios from 'axios';
import queryString from 'query-string';
import * as SecureStore from 'expo-secure-store';

import { SAVED_KEY } from '../constants';

// Set up default config for http requests
const axiosClient = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  const value = await SecureStore.getItemAsync(SAVED_KEY);
  if (value) {
    const { token } = JSON.parse(value);
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    const { status } = JSON.parse(JSON.stringify(error));
    throw (status === 500 && 'Internal Server Error') || '';
  }
);
export default axiosClient;
