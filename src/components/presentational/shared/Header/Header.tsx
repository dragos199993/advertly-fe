import React, { FunctionComponent, ReactElement } from 'react';
import { IHeaderProps } from '../../../core/shared/HeaderContainer/IHeaderContainerProps';
import { LOGIN, PROFILE, REGISTER, ROOT, USERS } from '../../../../router/routePaths';
import {
  Alignment,
  Button,
  Classes,
  Menu, MenuDivider,
  MenuItem, Navbar,
  NavbarGroup,
  NavbarHeading,
  Popover,
  Position
} from '@blueprintjs/core';

const Header: FunctionComponent<IHeaderProps> = ({ changePage, user, signOut }) => {
  let currentMenu: ReactElement = (
    <Menu>
      <MenuItem text="Register" onClick={ () => changePage(REGISTER) } />
      <MenuItem text="Log In" onClick={ () => changePage(LOGIN) } />
    </Menu>
  );
  if (user && user.username) {
    currentMenu = (
      <Menu>
        <MenuItem text="Profile" onClick={ () => changePage(PROFILE) } />
        <MenuDivider />
        <MenuItem text="Sign out" onClick={ signOut } />
      </Menu>
    );
  }

  return (
    <Navbar>
      <NavbarGroup align={ Alignment.LEFT }>
        <NavbarHeading onClick={ () => changePage(ROOT) }>Advertly</NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align={ Alignment.RIGHT }>
        <Button className={ Classes.MINIMAL } onClick={ () => changePage(ROOT) } icon="home" text="Home" />
        <Button className={ Classes.MINIMAL } onClick={ () => changePage(USERS) } icon="people" text="Users" />
        <Popover content={ currentMenu } position={ Position.BOTTOM }>
          <Button className={ Classes.MINIMAL } icon="user" text={ (user && user.username) || 'Guest' } />
        </Popover>
      </NavbarGroup>
    </Navbar>
  );
};

export default Header;
