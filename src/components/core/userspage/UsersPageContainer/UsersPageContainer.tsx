import { Component, ReactNode } from 'react';
import { IUsersPageContainerProps, IUsersPageContainerState } from './IUsersPageContainer';
import { axiosweb, USERS } from '../../../../config/axiosConfig';

class UsersPageContainer extends Component<IUsersPageContainerProps, IUsersPageContainerState> {
  state: IUsersPageContainerState = {
    users: []
  };

  componentDidMount(): void {
    axiosweb.get(USERS).then((res) => {
      this.setState({ users: res.data });
    });
  }

  render(): ReactNode {
    const { children } = this.props;
    return children({ users: this.state.users });
  }
}

export default UsersPageContainer;
