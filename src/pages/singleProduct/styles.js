import { Container } from "react-bootstrap";
import styled from "styled-components";

export const Wrapper = styled("div")({
  marginTop: "6rem",
  fontFamily: "Inter",
  "@media (max-width:991px)": {
    marginTop: "0",
  },
});
export const ProductReview = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
export const ProductImage = styled("div")({
  img: {
    width: "100%",
    height: "100%",
  },
});
export const Reactions = styled("div")({
  display: "flex",
  alignItems: "center",
  width: "fit-content",
});
export const StarsWrapper = styled("div")({
  display: "flex",
  width: "150px",
  marginBottom: "10px",
  "& img": {
    width: "100%",
    height: "100%",
  },
});
export const Likes = styled("h4")({
  margin: "0",
  fontSize: "18px",
  fontWeight: "500",
  color: "#6A6A6A",
  whiteSpace: "nowrap",
  marginLeft: "14px",
  "@media (min-width: 991px) and (max-width: 1199px)": {
    fontSize: "14px",
    marginRight: "8px",
  },
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
});

export const AvatarTitle = styled("h4")({
  fontWeight: "500",
  color: "#6A6A6A",
  fontSize: "14px",
  marginTop: "10px",
  cursor: "pointer",
});
export const ProductPrice = styled("h4")({
  fontSize: "26px",
  fontWeight: "500",
  marginBottom: "10px",
  span: {
    fontSize: "20px",
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
  fontSize: "18px",
  marginLeft: "8px",
});
export const DetailsWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "10px",
  marginTop: "10px",
  svg: {
    cursor: "pointer",
    width: "40px",
    height: "40px",
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
export const InstalmentWrapper = styled("div")({
  display: "flex",
  marginTop: "40px",
  marginBottom: "20px",
});
export const Instalment = styled("h4")({
  color: "#6A6A6A",
  fontWeight: "500",
  fontSize: "16px",
  whiteSpace: "nowrap",
});
export const InstalmentDetails = styled("h6")({
  marginLeft: "10px",
  fontSize: "14px",
  fontWeight: "400",
  whiteSpace: "wrap",
});
export const DeliveryWrapper = styled("div")({
  background: "#FAFAFA",
  padding: "14px",
  borderRadius: "7.2px",
});
export const DeliverTitle = styled("h4")({
  fontSize: "18px",
  fontWeight: "600",
});
export const Location = styled("p")({
  fontSize: "15px",
});
export const FreeDelivery = styled("div")({});
export const FreeTitle = styled("div")({
  display: "flex",
  alignItems: "center",
  span: {
    fontSize: "18px",
    fontWeight: "600",
  },
  p: {
    fontWeight: "400",
    fontSize: "14px",
    margin: "0",
    marginLeft: "14px",
  },
});
export const FreeDetails = styled("p")({
  background: "#FFFFFF",
  padding: "6px",
  marginLeft: "14px",
  marginTop: "14px",
  fontSize: "14px",
  borderRadius: "7.2px",
});
export const Cash = styled("p")({
  fontSize: "15px",
});
export const ServiceWrapper = styled("div")({});
export const ServiceTitle = styled("h4")({
  fontSize: "18px",
  fontWeight: "600",
});
export const Return = styled("div")({});
export const ReturnTitle = styled("h4")({
  fontSize: "14px",
});
export const ReturnDetails = styled("p")({
  fontSize: "12px",
  marginLeft: "14px",
});
export const Warranty = styled("p")({
  fontSize: "15px",
});
export const StyledContainer = styled(Container)({
  background: "#FAFAFA",
  paddingTop: "20px",
  marginTop: "40px",
  marginBottom: "40px",
  borderRadius: "7.2px",
});
export const ProductTitle = styled("p")({
  fontWeight: "600",
  fontSize: "18px",
});
export const ProductDetails = styled("p")({
  fontSize: "14px",
  letterSpacing: ".4px",
  marginLeft: "14px",
});
export const CommentTitle = styled("div")({
  fontWeight: "600",
  fontSize: "18px",
  marginTop: "30px",
});
