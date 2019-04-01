import { AnyAction } from 'redux';
import { IUser } from './IDefault';

export interface IChangeAuthStateAction {
  changeAuthState: (user: IUser) => AnyAction;
}
