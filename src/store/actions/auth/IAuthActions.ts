import { IUser } from '../../../interfaces/IDefault';

export interface IAction {
  type: string;
}

export interface IActionUser extends IAction {
  payload: IUser;
}
