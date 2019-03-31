import React, { Component, ReactNode } from 'react';
import { IListPageContainerProps, IListPageContainerState } from './IListPageContainerProps';
import axios from 'axios';

class ListPageContainer extends Component<IListPageContainerProps, IListPageContainerState> {

  state: IListPageContainerState = {
    posts: []
  };

  componentDidMount(): void {
    axios.get('https://webfain.com/api/posts').then((res) => {
      this.setState({ posts: res.data });
    });
  }

  render(): ReactNode {
    const { children } = this.props;
    return children({ posts: this.state.posts });
  }
}

export default ListPageContainer;
