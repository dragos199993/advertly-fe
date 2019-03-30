import React, { Component, ReactNode } from 'react';
import { IListPageConatinerProps } from './IListPageContainerProps';

class ListPageContainer extends Component<IListPageConatinerProps> {
  render(): ReactNode {
    const { children } = this.props;
    return children();
  }
}

export default ListPageContainer;
