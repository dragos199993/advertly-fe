import React, { FunctionComponent, ReactElement, ReactNode } from 'react';
import ListPageContainer from '../../../core/listpage/ListPageContainer/ListPageContainer';

export const ListPage: FunctionComponent = () => {
  return (
    <div>List page</div>
  );
};

export const ListPageRender: ReactNode = (
  <ListPageContainer>
    { () => <ListPage /> }
  </ListPageContainer>
);
