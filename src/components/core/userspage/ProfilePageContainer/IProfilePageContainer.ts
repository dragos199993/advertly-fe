import { ReactElement } from 'react';
import { IIdParam, IUserUpdate } from '../../../../interfaces/IDefault';
import { RouteComponentProps } from 'react-router';

export interface IProfilePageContainerState {
  user: IUserUpdate;
}

export interface IProfilePageContainerProps extends RouteComponentProps<IIdParam> {
  children: (props: IProfilePageContainerState) => ReactElement<IProfilePageContainerState>;
}
