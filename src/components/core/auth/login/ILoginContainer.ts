import { RouteComponentProps } from 'react-router';
import { ReactElement } from 'react';
import { ILoginPresentational } from '../IAuth';

export interface ILoginContainerProps extends RouteComponentProps {
  children: (props: ILoginPresentational) => ReactElement<ILoginPresentational>;
}
