import { Component, ReactNode } from 'react';
import { IUserDetailContainerProps, IUserDetailContainerState } from './IUserDetailContainer';
import { axiosweb, USER } from '../../../../config/axiosConfig';
import { withRouter } from 'react-router';

class UserDetailContainer extends Component<IUserDetailContainerProps, IUserDetailContainerState> {
  state: IUserDetailContainerState = {
    user: {
      _id: '',
      username: '',
      email: '',
      created: '',
      role: ''
    }
  };

  componentDidMount(): void {
    const idParam: string = this.props.match.params.id;
    axiosweb.get(`${ USER }/${ idParam }`).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render(): ReactNode {
    const { children } = this.props;
    return children({ user: this.state.user });
  }
}

export default withRouter(UserDetailContainer);
