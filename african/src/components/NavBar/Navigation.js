import {
    Nav,
    NavLink,
    NavItem,
    // Collapse,
    // Navbar,
    // NavbarToggler,
    // NavbarBrand,
    UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    DropdownItem,
    NavbarText
  } from "reactstrap";
  
  import styled from "styled-components";
  
  export const Navigation = styled(Nav)`
    background-color: white;
    padding: 1% 0%;
    display: flex;
    justify-content: center;
  `;
  export const Logo = styled.img`
    width: 150px;
  `;
  export const NavWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 75%;
  `;
  export const LinkWrapper = styled(NavItem)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ;
  `;
  export const MenuLink = styled(NavLink)`
    color: #dc3545 !important;
    border-bottom: 2px solid #f8f9fa;
    font-weight: 500;
    margin: 0 5px;
    &:hover {
      color: #dc3545 !important;
      cursor: pointer !important;
      border-bottom: 2px solid #dc3545;
    }
    &.nav-link.active {
      color: #dc3545 !important;
      cursor: pointer !important;
      border-bottom: 2px solid #dc3545 !important;
    }
  `;
  export const RightText = styled(NavbarText)`
    color: #dc3545 !important;
    font-weight: 500;
  `;
  export const UserMenu = styled(UncontrolledDropdown)`
    a {
      color: #dc3545;
    }
  `;
  export const LogOut = styled(DropdownItem)`
    :hover {
      background: white;
      font-weight: 500;
      color: #dc3545;
    }
  `;
  