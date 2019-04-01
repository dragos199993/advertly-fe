import { ReactElement } from 'react';
import { IPost } from '../../../../interfaces/IDefault';

export interface IListPageContainerState {
  posts: IPost[];
}

export interface IListPageContainerProps {
  children: (props: IListPageContainerState) => ReactElement<IListPageContainerState>;
}
