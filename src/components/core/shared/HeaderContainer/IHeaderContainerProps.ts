import { ReactElement } from 'react';
import { IUser } from '../../../../interfaces/IDefault';

export interface IHeaderContainerProps {
  children: (props: IHeaderProps) => ReactElement<IHeaderProps>;
}

export interface IHeaderContainerState {
  isNavbarOpen: boolean;
  user: null | IUser;
}

export interface IHeaderProps extends IHeaderContainerState {
  toggleNavbarMenu: () => void;
  user: null | IUser;
}
