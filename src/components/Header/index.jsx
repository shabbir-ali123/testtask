import React, { useState } from "react";
import Wrapper, {
  Cover,
  LinkStyled,
  NavigationWrapper,
  SearchBar,
  StyledBadge,
  StyledBrand,
  StyledNavbar,
  StyledToggle,
} from "./styles";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/images/logo.png";
import SearchIcon, { Notifications, Shopping } from "../Svgs";
import profileImg from "../../assets/images/profile-avatar.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Wrapper>
      <StyledNavbar
        showMenu={showMenu}
        expand="lg"
        className="p-0 w-100"
        fixed="top"
      >
        <Container fluid>
          <StyledBrand href="/" className="text-white ">
            <img src={Logo} alt="logo" />
          </StyledBrand>
          <StyledToggle aria-controls="navbarScroll" onClick={toggleMenu} />
          <Navbar.Collapse id="navbarScroll " className="">
            <LinkStyled href="#" className="text-white">
              Go to Marketpage
            </LinkStyled>
            <Nav className="me-auto my-2 my-lg-0 "></Nav>
            <SearchBar>
              <SearchIcon />
              <input type="search" aria-label="Search" />
            </SearchBar>
            <NavigationWrapper>
              <Cover>
                <StyledBadge>3</StyledBadge>
                <Notifications />
              </Cover>
              <Cover>
                <StyledBadge>1</StyledBadge>
                <Shopping />
              </Cover>
              <Cover bgLight>
                <img src={profileImg} alt="profile" />
              </Cover>
            </NavigationWrapper>
          </Navbar.Collapse>
        </Container>
      </StyledNavbar>
    </Wrapper>
  );
};

export default Header;
