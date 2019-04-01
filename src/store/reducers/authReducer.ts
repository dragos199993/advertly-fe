import { AnyAction } from 'redux';
import { IAuthState } from '../initialState/IDefaultState';
import { authDefaultState } from '../initialState/authDefaultState';
import * as ACTIONS from '../actions/actionTypes';

export default (state: IAuthState = authDefaultState, action: AnyAction) => {
  switch (action.type) {
    case ACTIONS.CHANGE_AUTH_STATE:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
