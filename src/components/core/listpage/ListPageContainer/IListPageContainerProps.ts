import { ReactElement } from 'react';

export interface IPost {
  title: string;
  body: string;
}

export interface IListPageContainerState {
  posts: IPost[];
}

export interface IListPageContainerProps {
  children: (props: IListPageContainerState) => ReactElement<IListPageContainerState>;
}
