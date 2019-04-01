import { IUser } from '../../../interfaces/IDefault';
import { IActionUser } from './IAuthActions';
import * as ACTIONS from '../actionTypes';

export function changeAuthState(user: IUser): IActionUser {
  return {
    type: ACTIONS.CHANGE_AUTH_STATE,
    payload: user
  }
}
