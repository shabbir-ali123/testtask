import { Card } from "react-bootstrap";
import styled from "styled-components";

export const StyledCard = styled(Card)({
  background: "#FFFFFF",
  fontFamily: "Inter",
  overflow: "hidden",
  width: "100%",
  boxSizing: "border-box",
  border: "none",
  position: "relative",
  cursor: "pointer",
});
export const ProductReview = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
export const Reactions = styled("div")({
  display: "flex",
  alignItems: "center",
  width: "fit-content",
});
export const ImageWrapper = styled("div")({
  display: "flex",
  width: " -webkit-fill-available",
  "& img": {
    width: "85px",
    height: "100%",
  },
});
export const Likes = styled("h4")({
  margin: "0",
  fontSize: "11px",
  fontWeight: "500",
  color: "#6A6A6A",
  whiteSpace: "nowrap",
  marginLeft: "6px",
  marginTop: "4px",
});
export const Emoji = styled("div")({
  svg: {
    cursor: "pointer",
    marginBottom: "4px",
  },
});
export const AvatarWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  margin: "0",
});
export const AvatarImage = styled("div")({
  width: "32px",
  height: "32px",
  "& img": {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    cursor: "pointer",
  },
});
export const AvatarTitle = styled("h4")({
  fontWeight: "500",
  color: "#6A6A6A",
  fontSize: "14px",
  marginTop: "10px",
  marginLeft: "8px",
  cursor: "pointer",
});
export const ProductPrice = styled("h4")({
  fontSize: "22px",
  fontWeight: "500",
  marginTop: "2px",
  span: {
    fontSize: "16px",
  },
});
export const CircleWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
});
export const CircleIcon = styled("div")({
  width: "20px",
  height: "20px",
  background: "#3CD4F5",
  borderRadius: "50%",
});
export const PcTitle = styled("h4")({
  margin: "0",
  fontSize: "14px",
  marginLeft: "8px",
  fontFamily: "Inter",
});
export const DetailsWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  svg: {
    cursor: "pointer",
  },
});
export const ShoppingWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  top: "10px",
  right: "10px",
  height: "30px",
  width: "60px",
  background: "#4c45f6",
  borderRadius: "7.2px",
  padding: "2px 6px 2px 5px",
  svg: {
    width: "100%",
    height: "100%",
  },
});
export const ShoppingTitle = styled("h4")({
  fontWeight: "600",
  margin: "0",
  fontSize: "12.3px",
  color: "#FFFFFF",
  marginLeft: "8px",
  cursor: "pointer",
});
