import { ReactElement } from 'react';
import { IUser } from '../../../../interfaces/IDefault';
import { IChangeAuthStateAction } from '../../../../interfaces/IActions';
import { IUserStore } from '../../../../interfaces/IStore';
import { RouteComponentProps } from 'react-router';

export type IHeaderContainerActions = IChangeAuthStateAction;

export type IHeaderContainerStore = IUserStore;

export interface IHeaderContainerProps extends
  IHeaderContainerActions,
  IHeaderContainerStore,
  RouteComponentProps{
  children: (props: IHeaderProps) => ReactElement<IHeaderProps>;
}

export interface IHeaderContainerState {
  user: null | IUser;
}

export interface IHeaderProps extends IHeaderContainerState {
  signOut: () => void;
  user: null | IUser;
  changePage: (path: string) => void;
}
