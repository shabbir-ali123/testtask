import { Badge, Nav } from "react-bootstrap";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  @media (max-width: 991px) {
    height: 60px;
    .navbar-collapse {
      margin-left: 28px;
    }
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledNavbar = styled(Navbar)`
  display: block;
  background: linear-gradient(to right, #411d85, #6e1f89);
  height: ${(props) => props.showMenu && "100%"};
`;
export const StyledBrand = styled(Navbar.Brand)({
  height: "60px",
  width: "180px",
  "& img": {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },
});
export const StyledToggle = styled(Navbar.Toggle)({
  background: "#ffffff",
  "&:focus": {
    boxShadow: "inherit",
    border: "1px solid #ffffff",
  },
});
export const LinkStyled = styled(Nav.Link)({
  borderBottom: "2px solid #fff",
  paddingBottom: 0,
  width: "fit-content",
  "@media(max-width:991px)": {
    marginTop: "28px",
  },
});

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 6px;
  width: 411px;
  height: 29px;
  margin-top: 6px;
  @media (max-width: 991px) {
    margin-top: 28px;
    width: 240px;
  }
  input[type="search"] {
    flex: 1;
    border: none;
    margin-left: 10px;
    outline: none;
    padding-right: 10px;
    z-index: 0;
    @media (max-width: 991px) {
      margin-left: 0;
    }
  }
  & svg {
    z-index: 11;
    margin-right: 10px;
  }
`;
export const NavigationWrapper = styled("div")({
  display: "flex",
  paddingTop: "14px",
});
export const StyledBadge = styled(Badge)({
  position: "absolute",
  right: "-10px",
  top: "-10px",
  borderRadius: "50%",
  backgroundColor: "#df4949 !important",
});
export const Cover = styled("div")({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "38px",
  cursor: "pointer",
  width: "38px",
  borderRadius: "10px",
  marginLeft: "18px",
  "@media(max-width:991px)": {
    marginLeft: "0",
    marginRight: "20px",
    marginTop: "28px",
  },
  "& img": {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    padding: "2px",
  },
  background: (props) => (props.bgLight ? "#FFFFFF" : "#34353a"),
});

export default Wrapper;
