import { ReactElement } from 'react';
import { IUser } from '../../../../interfaces/IDefault';
import { RouteComponentProps } from 'react-router';

export interface IUserDetailContainerState {
  user: IUser;
}

interface IIdParam {
  id: string;
}

export interface IUserDetailContainerProps extends RouteComponentProps<IIdParam> {
  children: (props: IUserDetailContainerState) => ReactElement<IUserDetailContainerState>;
}
