import { Component, ReactNode } from 'react';
import { IHeaderContainerProps, IHeaderContainerState } from './IHeaderContainerProps';
import { USERSTORE } from '../../../../config/axiosConfig';

class HeaderContainer extends Component<IHeaderContainerProps, IHeaderContainerState> {
  state: IHeaderContainerState = {
    isNavbarOpen: false,
    user: null
  };

  componentDidMount(): void {
    let user: string | null = localStorage.getItem(USERSTORE);
    if(user) {
      this.setState({ user: JSON.parse(user) })
    }
  }

  toggleNavbarMenu = () => {
    this.setState({
      isNavbarOpen: !this.state.isNavbarOpen
    });
  };

  render(): ReactNode {
    const { children } = this.props;

    return children({
      user: this.state.user,
      toggleNavbarMenu: this.toggleNavbarMenu,
      isNavbarOpen: this.state.isNavbarOpen
    });
  }
}

export default HeaderContainer;
