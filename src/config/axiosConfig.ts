import axios, { AxiosInstance } from 'axios';

export const axiosweb: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_AXIOS_BASE_URL,
  timeout: 1000
  // headers: {'X-Custom-Header': 'foobar'}
});

export const JWTSTORE: string = 'jwt';
export const USERSTORE: string = 'user';

export const POSTS: string = '/posts';

export const USER: string = '/user';
export const USERS: string = '/users';
export const LOGIN: string = '/login';
