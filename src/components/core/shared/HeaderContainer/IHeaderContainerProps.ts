import { ReactElement } from 'react';

export interface IHeaderContainerProps {
  children: (props: IHeaderProps) => ReactElement<IHeaderProps>;
}

export interface IHeaderContainerState {
  isNavbarOpen: boolean;
}

export interface IHeaderProps extends IHeaderContainerState {
  toggleNavbarMenu: () => void;
}
