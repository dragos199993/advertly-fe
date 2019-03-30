import React, { FunctionComponent } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { IHeaderProps } from '../../../core/shared/HeaderContainer/IHeaderContainerProps';

const Header: FunctionComponent<IHeaderProps> = ({ isNavbarOpen, toggleNavbarMenu }) => {
  return (
    <div>
      <Navbar color="light" light={ true } expand="md">
        <NavbarBrand href="/">nedsilon blog</NavbarBrand>
        <NavbarToggler onClick={ toggleNavbarMenu } />
        <Collapse isOpen={ isNavbarOpen } navbar={ true }>
          <Nav className="ml-auto" navbar={ true }>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav={ true } inNavbar={ true }>
              <DropdownToggle nav={ true } caret={ true }>
                Options
              </DropdownToggle>
              <DropdownMenu right={ true }>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider={ true } />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
