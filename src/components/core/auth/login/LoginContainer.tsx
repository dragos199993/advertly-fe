import React, { ChangeEvent, Component, ReactNode } from 'react';
import { ILoginContainerState, ILoginUser } from '../IAuth';
import { axiosweb, JWT, LOGIN } from '../../../../config/axiosConfig';
import { ROOT } from '../../../../router/routePaths';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { changeAuthState } from '../../../../store/actions/auth/authActions';
import { IUser } from '../../../../interfaces/IDefault';
import { ILoginContainerActions, ILoginContainerProps } from './ILoginContainer';

class LoginContainer extends Component<ILoginContainerProps, ILoginContainerState> {
  state: ILoginContainerState = {
    email: '',
    password: '',
    errors: {}
  };

  submitForm = (e: { preventDefault: () => void; target: HTMLElement; }) => {
    e.preventDefault();
    const { history, changeAuthState } = this.props;
    const { email, password } = this.state;

    axiosweb.post(LOGIN, { email, password })
      .then((response: any) => {
        if (response.data.success) {
          const loginStore = {
            token: response.data.token,
            user: response.data.user
          };
          changeAuthState(response.data.user);
          localStorage.setItem(JWT, response.data.token);
          localStorage.setItem('user', response.data.u);
          history.push(ROOT);
        }
      })
      .catch((err) => {
        if(err){
          this.setState({
            errors: err.response.data,
            password: '',
          })
        }
      });
  };

  changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value
    } as { [K in keyof ILoginUser]: ILoginUser[K] });
  };

  render(): ReactNode {
    const { children } = this.props;
    const { submitForm, changeInput, state } = this;

    return (
      children({
        submitForm,
        changeInput,
        state
      })
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch): ILoginContainerActions {
  return {
    changeAuthState: (user: IUser) => dispatch(changeAuthState(user))
  };
}

export default connect(null, mapDispatchToProps)(withRouter(LoginContainer));
