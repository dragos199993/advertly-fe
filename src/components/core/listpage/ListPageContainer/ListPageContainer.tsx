import { Component, ReactNode } from 'react';
import { IListPageContainerProps, IListPageContainerState } from './IListPageContainerProps';
import { axiosweb, POSTS } from '../../../../config/axiosConfig';

class ListPageContainer extends Component<IListPageContainerProps, IListPageContainerState> {
  state: IListPageContainerState = {
    posts: []
  };

  componentDidMount(): void {
    axiosweb.get(POSTS).then((res) => {
      this.setState({ posts: res.data });
    });
  }

  render(): ReactNode {
    const { children } = this.props;
    return children({ posts: this.state.posts });
  }
}

export default ListPageContainer;
