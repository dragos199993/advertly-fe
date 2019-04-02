import { IChangeAuthStateAction } from '../../../../interfaces/IActions';
import { RouteComponentProps } from 'react-router';
import { ReactElement } from 'react';
import { ILoginPresentational } from '../IAuth';

export type ILoginContainerActions = IChangeAuthStateAction;

export interface ILoginContainerProps extends RouteComponentProps, ILoginContainerActions {
  children: (props: ILoginPresentational) => ReactElement<ILoginPresentational>;
}
