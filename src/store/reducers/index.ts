import { combineReducers } from 'redux';
import auth from './authReducer';
import { IAuthState } from '../initialState/IDefaultState';

export interface IStore {
  auth: IAuthState;
}

export default combineReducers({ auth });
