import { Component, ReactNode } from 'react';
import {
  IHeaderContainerActions,
  IHeaderContainerProps,
  IHeaderContainerState,
  IHeaderContainerStore
} from './IHeaderContainerProps';
import { JWTSTORE, USERSTORE } from '../../../../config/axiosConfig';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IUser } from '../../../../interfaces/IDefault';
import { changeAuthState } from '../../../../store/actions/auth/authActions';
import { IStore } from '../../../../store/reducers';
import { initialUser } from '../../../../store/initialState/initialStates';
import { getLocalStorage } from '../../../../services/localStorageService';
import { withRouter } from 'react-router';
import { ROOT } from '../../../../router/routePaths';

class HeaderContainer extends Component<IHeaderContainerProps, IHeaderContainerState> {
  state: IHeaderContainerState = {
    user: null
  };

  componentDidMount(): void {
    let token: string | null = localStorage.getItem(JWTSTORE);
    let user: IUser | null = getLocalStorage<IUser, null>(USERSTORE, null);
    if(token && user) {
      this.props.changeAuthState(user)
    }
  }

  signOut: () => void = () => {
    const { changeAuthState, history } = this.props;
    changeAuthState(initialUser);
    localStorage.removeItem(USERSTORE);
    localStorage.removeItem(JWTSTORE);
    history.push(ROOT);
  };

  changePage = (path: string) => {
    this.props.history.push(path);
  };

  render(): ReactNode {
    const { children, user } = this.props;

    return children({
      signOut: this.signOut,
      user,
      changePage: this.changePage
    });
  }
}

function mapStateToProps(state: IStore): IHeaderContainerStore {
  return {
    user: state.auth.user
  }
}

function mapDispatchToProps(dispatch: Dispatch): IHeaderContainerActions {
  return {
    changeAuthState: (user: IUser) => dispatch(changeAuthState(user))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderContainer));
