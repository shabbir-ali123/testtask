import { Container, Dropdown } from "react-bootstrap";
import styled from "styled-components";

export const Text = styled.div(({ theme: { colors } }) => ({
  color: colors.primary,
}));

export const Wrapper = styled("div")({
  display: "flex",
});
export const ProductWrapper = styled(Container)({
  marginTop: "78px",
  marginLeft: "88px",
  "@media (max-width: 991px)": {
    marginTop: "18px",
    marginLeft: "0",
  },
});
export const ProductFilter = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "20px",
});
export const StyledToggle = styled(Dropdown.Toggle)({
  border: "1px solid #6A6A6A",
  background: "transparent",

  "&::after": {
    display: "none",
  },
  "&:hover": {
    background: "transparent",
  },
  "&:active": {
    background: "transparent",
  },
});
export const FilterTitle = styled("h6")({
  fontSize: "22px",
});
