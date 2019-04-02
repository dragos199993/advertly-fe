import { ReactElement } from 'react';
import { IIdParam, IUser } from '../../../../interfaces/IDefault';
import { RouteComponentProps } from 'react-router';

export interface IUserDetailContainerState {
  user: IUser;
}

export interface IUserDetailContainerProps extends RouteComponentProps<IIdParam> {
  children: (props: IUserDetailContainerState) => ReactElement<IUserDetailContainerState>;
}
