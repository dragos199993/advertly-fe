import { ChangeEvent, Component, ReactNode } from 'react';
import { IRegisterContainerState, IRegisterContainerProps, IRegisterUser } from '../IAuth';
import { axiosweb, USER } from '../../../../config/axiosConfig';

export default class RegisterContainer extends Component<IRegisterContainerProps, IRegisterContainerState> {

  state: IRegisterContainerState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'customer',
    errors: []
  };

  submitForm = (e: { preventDefault: () => void; target: HTMLElement; }) => {
    e.preventDefault();
    const { username, email, password, confirmPassword, role } = this.state;

    axiosweb.post(USER, { username, email, password, confirmPassword, role })
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((err) => {
        this.setState({
          errors: err.response.data,
          password: '',
          confirmPassword: ''
        });
      });
  };

  changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    } as { [K in keyof IRegisterUser]: IRegisterUser[K] });
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
