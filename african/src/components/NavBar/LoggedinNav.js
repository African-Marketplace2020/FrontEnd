import React, { useState, useEffect } from "react";
import Typed from "react-typed";
import { MdAccountCircle } from "react-icons/md";
import { connect } from "react-redux";
import { fetchCurrentUser } from "../../actions/actions";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import {
  Logo,
  LinkWrapper,
  MenuLink,
  RightText,
  UserMenu,
  LogOut
} from "./NavBar_Styles";
import logo from "../../imgs/evends.png";

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  //Typed JS Configuration
  var options = {
    strings: [`WELCOME ${props.userData.currentUsername}`],
    typeSpeed: 80,
    backSpeed: 80
  };

  useEffect(() => {
    props.fetchCurrentUser();
  }, []);

  return (
    <div>
      <Navbar fixed="top" color="light" light expand="md">
        <NavbarBrand href="/home">
          <Logo src={logo}></Logo>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <LinkWrapper>
              {(props.home) ? (
                <MenuLink href="/home" active>
                  HOME
                </MenuLink>
              ) : (
                <MenuLink href="/home">HOME</MenuLink>
              )}
            </LinkWrapper>
            <LinkWrapper>
              {props.market ? (
                <MenuLink href="/item-list" active>
                  MARKET
                </MenuLink>
              ) : (
                <MenuLink href="/item-list">MARKET</MenuLink>
              )}
            </LinkWrapper>
            <LinkWrapper>
              {props.postItems ? (
                <MenuLink href="/item-form" active>
                  POST ITEMS
                </MenuLink>
              ) : (
                <MenuLink href="/item-form">POST ITEMS</MenuLink>
              )}
            </LinkWrapper>
          </Nav>
          <RightText>
            {props.userData.currentUsername ? (
              <Typed
                style={{ marginRight: "10px", textTransform: "uppercase" }}
                strings={options.strings}
                typeSpeed={options.typeSpeed}
                backSpeed={options.backSpeed}
              />
            ) : (
              "LOADING..."
            )}
          </RightText>
          <Nav>
            <UserMenu nav inNavbar>
              <DropdownToggle nav caret>
                <MdAccountCircle /> ACCOUNT
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Post Items</DropdownItem>
                <DropdownItem>Marketplace</DropdownItem>
                <DropdownItem divider />
                <LogOut
                  onClick={() => window.localStorage.clear("token")}
                  href="/"
                >
                  Log Out
                </LogOut>
              </DropdownMenu>
            </UserMenu>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default connect(
  state => {
    return {
      userData: state.userData,
      isFetching: state.isFetching,
      error: state.error
    };
  },
  { fetchCurrentUser }
)(Navigation);
