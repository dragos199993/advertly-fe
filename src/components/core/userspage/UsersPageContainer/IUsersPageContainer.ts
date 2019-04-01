import { ReactElement } from 'react';
import { IUser } from '../../../../interfaces/IDefault';

export interface IUsersPageContainerState {
  users: IUser[];
}

export interface IUsersPageContainerProps {
  children: (props: IUsersPageContainerState) => ReactElement<IUsersPageContainerState>;
}
