import { Component, ReactNode } from 'react';
import { IHeaderContainerProps, IHeaderContainerState } from './IHeaderContainerProps';

class HeaderContainer extends Component<IHeaderContainerProps, IHeaderContainerState> {
  state: IHeaderContainerState = {
    isNavbarOpen: false
  };

  toggleNavbarMenu = () => {
    this.setState({
      isNavbarOpen: !this.state.isNavbarOpen
    });
  };

  render(): ReactNode {
    const { children } = this.props;
    return children({
      toggleNavbarMenu: this.toggleNavbarMenu,
      isNavbarOpen: this.state.isNavbarOpen
    });
  }
}

export default HeaderContainer;
