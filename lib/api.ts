import axios from 'xior';
import { getCurrentUser } from './session';
const baseURL = 'https://royals-8981b378f321.herokuapp.com/api';

export const royalsApi = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
  },
});

royalsApi.interceptors.request.use(async (config) => {
  const user = await getCurrentUser();
  config.headers.Authorization = `Bearer ${user?.access_token}`;
  return config;
});

export default royalsApi;
