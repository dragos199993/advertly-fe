import { Component, ReactNode } from 'react';
import { axiosweb, PROFILE, USERSTORE } from '../../../../config/axiosConfig';
import { withRouter } from 'react-router';
import { IProfilePageContainerProps, IProfilePageContainerState } from './IProfilePageContainer';
import { getLocalStorage } from '../../../../services/localStorageService';
import { IUser } from '../../../../interfaces/IDefault';
import { LOGIN } from '../../../../router/routePaths';

class ProfilePageContainer extends Component<IProfilePageContainerProps, IProfilePageContainerState> {
  state: IProfilePageContainerState = {
    user: {
      username: '',
      email: '',
      password: '',
      role: ''
    }
  };

  componentDidMount(): void {
    let user: IUser | null = getLocalStorage<IUser, null>(USERSTORE, null);
    let idParam: string = '';
    if(!user){
      this.props.history.push(LOGIN);
      return;
    }
    if(user) {
      idParam = user._id;
    }
    axiosweb.get(`${ PROFILE }/${ idParam }`).then((res) => {
      this.setState({ user: res.data });
    });
  }

  render(): ReactNode {
    const { children } = this.props;
    return children({ user: this.state.user });
  }
}

export default withRouter(ProfilePageContainer);
