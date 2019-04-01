import React, { FunctionComponent, ReactNode } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, NavItem
} from 'reactstrap';
import { IHeaderProps } from '../../../core/shared/HeaderContainer/IHeaderContainerProps';
import { Link, NavLink } from 'react-router-dom';
import { LOGIN, REGISTER, USERS } from '../../../../router/routePaths';


const Header: FunctionComponent<IHeaderProps> = ({ isNavbarOpen, toggleNavbarMenu, user }) => {

  let currentMenu: ReactNode = (
    <>
      <Link to={ LOGIN }>
        <DropdownItem>
          Log in
        </DropdownItem>
      </Link>
      <Link to={ REGISTER }>
        <DropdownItem>
          Register
        </DropdownItem>
      </Link>
    </>
  );
  if (user) {
    currentMenu = (
      <>
        <Link to={ LOGIN }>
          <DropdownItem>
            Sign out
          </DropdownItem>
        </Link>
      </>
    );
  }

  return (
    <div>
      <Navbar color="light" light={ true } expand="md">
        <Link className="navbar-brand" to="/">Advertly</Link>
        <NavbarToggler onClick={ toggleNavbarMenu } />
        <Collapse isOpen={ isNavbarOpen } navbar={ true }>
          <Nav className="ml-auto" navbar={ true }>
            <NavItem>
              <NavLink className="nav-link" to={ USERS }>Users</NavLink>
            </NavItem>
            <UncontrolledDropdown nav={ true } inNavbar={ true }>
              <DropdownToggle nav={ true } caret={ true }>
                { user && user.username || 'Guest' }
              </DropdownToggle>
              <DropdownMenu right={ true }>
                <Link to="/settings">
                  <DropdownItem>
                    Settings
                  </DropdownItem>
                </Link>
                <DropdownItem divider={ true } />
                { currentMenu }
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
