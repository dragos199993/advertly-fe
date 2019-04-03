import axios, { AxiosInstance } from 'axios';

export const JWTSTORE: string = 'jwt';
export const USERSTORE: string = 'user';

export const POSTS: string = '/posts';

export const USER: string = '/user';
export const PROFILE: string = '/profile';
export const USERS: string = '/users';
export const LOGIN: string = '/login';
export const BASE_URL: string = 'http://localhost:5005/api';

export const axiosweb: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000
  // headers: {'X-Custom-Header': 'foobar'}
});
axiosweb.interceptors.request.use(function (config) {
  const token = localStorage.getItem(JWTSTORE);
  config.headers.authorization =  token;

  return config;
});

